export default function TodoItems({ todos, deleteTodo }) {
  return (
    <section className="align h-full w-[70%] bg-[#D2E0BF] p-8 text-center">
      <h1 className="mb-5 text-5xl">TO-DO-LIST</h1>
      {todos.length === 0 && <p>No Todos, Hurry and add items to todo</p>}
      <ul className="flex flex-col items-start justify-center">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-1.5 p-2">
            <span className="mr-4">
              <input className="h-4 w-4" type="checkbox"></input>
            </span>
            <span className="mr-4 text-2xl">{todo.title}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className=" rounded-sm border-2 border-rose-500 px-2 py-1 font-bold  text-rose-500  hover:bg-red-300"
            >
              Delete❌
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
