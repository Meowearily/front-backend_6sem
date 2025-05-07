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
                {todo.deadline}{" "}
                <input type="checkbox" checked={todo.completed} onChange={() => handleToggleComplete(todo.id)} />
                <button onClick={() => handleDeleteTodo(todo.id)}> Delete </button>{" "}
              </li>
            ))}{" "}
          </ul>{" "}
        </div>
      );
  };
  

  
  export default Todo;