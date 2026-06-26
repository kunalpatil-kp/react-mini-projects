import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: "Learn React", id: uuidv4() },
    { task: "Practice Coding", id: uuidv4() }
  ]);
  
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return;
    
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  const UpperCaseOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: todo.task.toUpperCase() };
        }
        return todo;
      })
    );
  };

  return (
    <div className="todo-container">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={updateTodoValue}
          onKeyPress={(e) => e.key === "Enter" && addNewTask()}
        />
        <button onClick={addNewTask}>Add Task</button>
      </div>

      <h3>Tasks ({todos.length})</h3>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.task}</span>
            <div className="actions">
              <button onClick={() => UpperCaseOne(todo.id)} className="upper-btn">
                Aa
              </button>
              <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button onClick={upperCaseAll} className="upper-all-btn">
          UpperCase All Tasks
        </button>
      )}
    </div>
  );
}