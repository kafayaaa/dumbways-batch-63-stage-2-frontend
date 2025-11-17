import "./App.css";
// import List from "./components/List";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { TodoProvider } from "./contexts/TodoProvider";

function App() {
  return (
    <>
      <TodoProvider>
        <div className="h-screen w-full p-0 m-0 flex flex-col justify-center items-center gap-5">
          <h1 className="text-7xl font-bold text-slate-950 mb-7">
            My To-Do App
          </h1>

          {/* <List title="Learn React Components" />
        <List title="Learn React Props" />
        <List title="Learn React State" /> */}

          <ToDoForm />
          <ToDoList />
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
