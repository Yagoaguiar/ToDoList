import { useState } from "react";
import Todo from "./components/todo";
import TodoForm from "./components/TodoForm";
import "./App.css";
import Search from "./components/Search";
import Filter from "./components/filter";
import TodoList from "./components/ToDoList";

function App() {
  return (
    <div className="app">
      <TodoList />
    </div>
  );
}
export default App;
