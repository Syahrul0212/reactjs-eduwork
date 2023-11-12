import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
      setCount(count => count + 1);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>{" "}
      <span>{count}</span>{" "}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
