import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoListContext";
import AddTodo from "./AddTodo";

const Todos = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [showModal, setShowModal] = useState(false);
  const doneHandler = (id) => {
    let newList = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, completed: !todo.completed }
        : { ...todo };
    });
    setTodos(newList);
  };
  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };
  const openForm = () => {
    setShowModal(true);
  };
  return (
    <div className="todos">
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          {!todo.completed ? (
            <div>
              <h3>
                {todo.title}
                <span>
                  <button className="btn" onClick={() => doneHandler(todo.id)}>
                    Done
                  </button>
                  <button
                    className="btn"
                    onClick={() => deleteHandler(todo.id)}
                  >
                    Delete
                  </button>
                </span>
              </h3>
            </div>
          ) : null}
        </div>
      ))}
      {!showModal ? <button onClick={openForm}>+ Item</button> : <AddTodo />}
    </div>
  );
};

export default Todos;
