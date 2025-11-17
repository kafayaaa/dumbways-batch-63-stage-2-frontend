import { useState } from "react";
import { useTodo } from "../hooks/useTodo";

export default function ToDoForm() {
  const [text, setText] = useState("");
  const { createTodo, loading } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    createTodo(text);
    setText("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-80 justify-between items-center p-5 rounded bg-slate-200"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={loading}
        className="p-3 bg-slate-50 rounded"
        placeholder="Add new task"
      />
      <button
        type="submit"
        className="p-3 rounded bg-slate-500 text-slate-950 font-bold"
        disabled={loading}
      >
        Add
      </button>
    </form>
  );
}
