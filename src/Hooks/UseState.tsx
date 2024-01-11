import { useState } from 'react';
import getClassName from '../utils/getClassName';

function UseState() {
  const [counter, setCounter] = useState(0);

  const className = getClassName(counter);

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
