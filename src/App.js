import "./App.css";
import TodoListContext from "./context/TodoListContext";
import { Todos, CompletedTodos } from "./components";

function App() {
  return (
    <div className="App">
      <TodoListContext>
        <Todos />
        <CompletedTodos />
      </TodoListContext>
    </div>
  );
}

export default App;
