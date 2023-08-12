import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import TodoItems from "./TodoItems";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addtodo(title) {
    setTodos((currenttodos) => [
      ...currenttodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  function deleteTodo(id) {
    setTodos((currenttodos) => {
      return currenttodos.filter((tmp) => tmp.id !== id);
    });
  }

  return (
    <main className=" mx-auto flex h-full w-[60%] flex-col items-center justify-start gap-y-3 bg-[#411a41] p-8  font-mono">
      <NewTodoForm onAdd={addtodo} />

      <TodoItems todos={todos} deleteTodo={deleteTodo} />
    </main>
  );
}
