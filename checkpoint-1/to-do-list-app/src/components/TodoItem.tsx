import { useState } from "react";
import { useTodo } from "../hooks/useTodo";
import type { Todo } from "../type/todo";

export const TodoItem = ({ todo }: { todo: Todo }) => {
  const { updateTodo, deleteTodo, toggleComplete, loading } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <div className="w-full flex justify-between items-center">
      {isEditing ? (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-3 mr-3"
            disabled={loading}
          />
          <div>
            <button
              onClick={handleUpdate}
              disabled={loading}
              className="bg-blue-500 px-3 py-2 rounded mr-3 text-slate-50 font-bold"
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="mr-2"
            />
            <span className={todo.completed ? "line-through" : ""}>
              {todo.text}
            </span>
          </div>
          <div>
            <button
              onClick={() => setIsEditing(true)}
              disabled={loading}
              className="bg-green-500 px-3 py-2 rounded mr-3 text-slate-50 font-bold"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              disabled={loading}
              className="bg-red-500 px-3 py-2 rounded text-slate-50 font-bold"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};
