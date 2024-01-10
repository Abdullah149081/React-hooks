import { useState } from 'react';

function UseState() {
  const [counter, setCounter] = useState(0);

  let className;
  if (counter >= 1) {
    className = 'text-lime-500';
  } else if (counter < 0) {
    className = 'text-red-500';
  } else {
    className = 'text-black';
  }

  return (
    <div className="mb-2">
      <h1 className={className}>{counter}</h1>
      <button
        type="button"
        onClick={() => setCounter((prevCounter) => prevCounter + 1)}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => setCounter((prevCounter) => prevCounter - 1)}
      >
        Decrement
      </button>
      <button type="button" onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
}

export default UseState;
