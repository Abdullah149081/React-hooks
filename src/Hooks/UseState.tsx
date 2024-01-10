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

  const handlerIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handlerDecrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  const handlerReset = () => {
    setCounter(0);
  };

  return (
    <div className="mb-2">
      <h1 className={`${className} mb-3`}>{counter}</h1>
      <button type="button" onClick={handlerIncrement}>
        Increment
      </button>
      <button type="button" onClick={handlerDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handlerReset}>
        Reset
      </button>
    </div>
  );
}

export default UseState;
