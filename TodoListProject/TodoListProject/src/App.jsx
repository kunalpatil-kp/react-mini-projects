import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

export default function App() {
  return (
    <>
      <div className="app-container">
        <h1>✅ My Todo List</h1>
        <TodoList />
      </div>
    </>
  );
}