import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  return <button class="p-5 bg-black text-white rounded-lg" onClick={() => setCount(count() + 1)}>{count()}</button>
}
