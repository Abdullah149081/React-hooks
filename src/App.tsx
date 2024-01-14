/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import UseEffect from './Hooks/UseEffect';
import UseReducer from './Hooks/UseReducer';
import UseRef from './Hooks/UseRef';
import UseState from './Hooks/UseState';
import useDark from './Hooks/useDark';
import DarkTheme from './component/DarkTheme';
import Form from './component/Form';
import FormReducer from './component/FormReducer';

function App() {
  const [dark] = useDark();
  return (
    <div
      className={` flex h-screen items-center justify-center ${
        dark ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <Form /> */}
      {/* <FormReducer /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      <DarkTheme />
    </div>
  );
}

export default App;
