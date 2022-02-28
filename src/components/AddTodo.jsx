import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoListContext";

const AddTodo = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { userId: 1, id: Date.now(), title: input, completed: false },
    ]);
    setInput("");
  };
  return (
    <form>
      <input
        type="text"
        placeholder="add todo here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="submitBtn" onClick={submitHandler}>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
