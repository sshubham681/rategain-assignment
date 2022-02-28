import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const TodoContext = createContext();

const TodoListContext = (props) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => setTodos(response.data));
  }, []);
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoListContext;
