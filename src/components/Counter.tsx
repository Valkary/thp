import { createSignal, createResource } from "solid-js";

async function fetchServer() {
  const response = await fetch("/api/test", { method: "post" });
  return await response.json();
}

export default function Counter() {
  const [server] = createResource(fetchServer);
  const [count, setCount] = createSignal(0);

  return (
    <div class="bg-black text-red-500">
      <div>{JSON.stringify(server())}</div>
      <button onClick={() => setCount(count() + 1)}>Your count: {count()}</button>
    </div>
  )
}
