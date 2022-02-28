import { useEffect, useState } from "react";
import Todos from "./components/Todos";
import "./App.css";
import CompletedTodos from "./components/CompletedTodos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);
  return (
    <div className="App">
      <Todos todos={todos} setTodos={setTodos} />
      <CompletedTodos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
