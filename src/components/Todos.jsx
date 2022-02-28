import React from "react";

const Todos = ({ todos, setTodos }) => {
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
    </div>
  );
};

export default Todos;
