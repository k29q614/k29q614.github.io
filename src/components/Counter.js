import { useState } from 'react';

export default function Counter({ increment, buttonColor }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => (prevCount + increment > 10 ? 0 : prevCount + increment));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button
        onClick={handleClick}
        style={{ backgroundColor: buttonColor }}
      >
        Increment by {increment}
      </button>
    </div>
  );
}
