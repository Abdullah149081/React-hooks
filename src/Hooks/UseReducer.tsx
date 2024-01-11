import { useReducer } from 'react';
import getClassName from '../utils/getClassName';

type IncrementAction = { type: 'incremented' };
type DecrementAction = { type: 'decremented' };
type IncrementByFiveAction = { type: 'incrementedByFive'; payload: number };

type ActionType = IncrementAction | DecrementAction | IncrementByFiveAction;

const initialState = {
  count: 0,
};

const reducer = (currentState: { count: number }, action: ActionType) => {
  switch (action.type) {
    case 'incremented':
      return {
        count: currentState.count + 1,
      };

    case 'decremented':
      return {
        count: currentState.count - 1,
      };

    case 'incrementedByFive':
      return {
        count: currentState.count + action.payload,
      };

    default:
      return currentState;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const className = getClassName(state.count);

  const handlerIncrement = () => {
    dispatch({ type: 'incremented' });
  };

  const handlerDecrement = () => {
    dispatch({ type: 'decremented' });
  };

  const handlerIncrementByFive = () => {
    dispatch({ type: 'incrementedByFive', payload: 5 });
  };

  return (
    <div className="mb-2">
      <h1 className={`${className} mb-3`}>{state.count}</h1>
      <button type="button" onClick={handlerIncrement}>
        Increment
      </button>
      <button type="button" onClick={handlerDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handlerIncrementByFive}>
        Increment By 5
      </button>
    </div>
  );
}

export default UseReducer;
