import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import Search from "./Search";
import Filter from "./Filter";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "trabalho",
      isComplete: false,
    },
    {
      id: 2,
      text: "Iracing",
      category: "Pessoal",
      isComplete: false,
    },
    {
      id: 3,
      text: "Subir para o git",
      category: "trabalho",
      isComplete: false,
    },
  ]);
  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isComplete: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(newTodos);
  };

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  return (
    <div className="todo-list">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Complete"
              ? todo.isComplete
              : !todo.isComplete
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
