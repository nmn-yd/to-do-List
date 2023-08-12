import { useState } from "react";

export default function NewTodoForm({ onAdd }) {
  const [task, setTaskItem] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    if (task === "") return;
    onAdd(task);
    setTaskItem("");
  }

  return (
    <form
      onSubmit={handlesubmit}
      className=" w-[70%] bg-[#506C64] p-8 text-center"
    >
      <h1 className="mb-8 text-5xl">Add Item to the List</h1>
      <input
        className="w-72 p-5"
        type="text"
        id="new-todo"
        value={task}
        placeholder="Enter a new task"
        onChange={(e) => {
          setTaskItem(e.target.value);
        }}
      />
      <button className=" mb-2 bg-black p-5 text-white hover:bg-slate-500">
        Add task
      </button>
    </form>
  );
}
