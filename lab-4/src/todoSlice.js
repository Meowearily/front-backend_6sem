import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
      todos: [],
      filter: "all",
    },
    reducers: {
      // Редукторы будут определены здесь

      addTodo: (state, action) => {
        const newTodo = {
          id: Date.now(),
          text: action.payload.text,
          completed: false,
          deadline: action.payload.deadline,
          done: null,
        };
        state.todos.push(newTodo);
      },

      toggleComplete: (state, action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
          if (todo.completed) {
            todo.done = new Date().toISOString();
          } else {
            todo.done = null;
          }
        }
      },
      
      deleteTodo: (state, action) => {
        const index = state.todos.findIndex((todo) => todo.id === action.payload);
        if (index !== -1) {
          state.todos.splice(index, 1);
        }
      },

      setFilter: (state, action) => {
        state.filter = action.payload;
      },
      
    },
  });
  
export const { addTodo, toggleComplete, deleteTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;