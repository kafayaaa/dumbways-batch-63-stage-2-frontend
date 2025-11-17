import { useTodo } from "../hooks/useTodo";
import { TodoItem } from "./TodoItem";

export default function ToDoList() {
  const { todos, loading } = useTodo();
  return (
    <div className="w-80 flex flex-col gap-3 justify-center items-start bg-slate-200 p-5 rounded">
      {loading && <p className="text-center font-bold">Loading...</p>}
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
