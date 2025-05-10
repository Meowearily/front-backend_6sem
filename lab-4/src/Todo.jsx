import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo, setFilter } from "./todoSlice";

const Todo = () => {
    // Код компонента будет здесь

    const [text, setText] = useState("");
    const [deadline, setDeadline] = useState("");

    const todos = useSelector((state) => state.todos.todos);
    const filter = useSelector((state) => state.todos.filter);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setText(e.target.value);
      };

      const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
      };
      
      const handleAddTodo = () => {
        if (text) {
          dispatch(addTodo({ text, deadline }));
          setText("");
          setDeadline("");
        }
      };
      
      const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
      };
      
      const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
      };

      const handleFilterChange = (filter) => {
        dispatch(setFilter(filter));
      }

      const getColor = (deadline) => {
        const currentDate = new Date();
        const deadlineDate = new Date(deadline);

        if (deadlineDate - currentDate < 0) {
          return "red";
        } else if ((deadlineDate - currentDate <= 24*60*60*1000)&&(deadlineDate - currentDate >= 0)) {
          return "yellow";
        } else {
          return "green";
        }
      };

      const showTodo = () => {
        if (filter === "completed") {
          return todos.filter((todo) => todo.completed);
        }
        if (filter === "active") {
          return todos.filter((todo) => !todo.completed);
        }
        return todos;
      };

      const groupByDate = (todos) => {
        return todos.reduce((acc, todo) => {
          const date = new Date(todo.deadline).toLocaleDateString();
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(todo);
          return acc;
        }, {});
      };
      
      return (
        <div>
          <input type="text" value={text} onChange={handleInputChange} placeholder="Add new todo" />{" "}
          <input type="datatime-local" value={deadline} onChange={handleDeadlineChange} placeholder="Set deadline" />{" "}
          <button onClick={handleAddTodo}> Add Todo </button>{" "}
          <div>
            <button onClick={() => handleFilterChange("all")}>All</button>
            <button onClick={() => handleFilterChange("active")}>Active</button>
            <button onClick={() => handleFilterChange("completed")}>Completed</button>
          </div>
          <div>
            {Object.entries(groupByDate(showTodo())).map(([date, todos]) => (
              <div key={date}>
                <h3 style={{ color: "lightblue" }}>{date}</h3>
                <ul>
                  {" "}
                  {todos.map((todo) => (
                    <li
                      key={todo.id}
                      style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                      }}
                    >

                      {todo.text}{" "}
                      {!todo.completed && todo.deadline && (
                        <span style={{ color: getColor(todo.deadline) }}>
                          {new Date(todo.deadline).toLocaleString()}
                        </span>
                      )}
                      {todo.completed && todo.done && (
                        <span style={{ color: "lightblue" }}>
                          Done: {new Date(todo.done).toLocaleString()}
                        </span>
                      )}
                      <input type="checkbox" checked={todo.completed} onChange={() => handleToggleComplete(todo.id)} />

                      <button onClick={() => handleDeleteTodo(todo.id)}> Delete </button>{" "}
                    </li>
                  ))}{" "}
                </ul>{" "}
              </div>
            ))}
          </div>
        </div>
      );
  };
  

  
  export default Todo;