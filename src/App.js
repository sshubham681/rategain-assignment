import Todos from "./components/Todos";
import "./App.css";
import CompletedTodos from "./components/CompletedTodos";
import TodoListContext from "./context/TodoListContext";

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
