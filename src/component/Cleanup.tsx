import { useEffect, useState } from 'react';

function Cleanup() {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     setInterval(() => {
  //       console.log('Render');
  //       setCount((preCount) => preCount + 1);
  //     }, 1000);
  //   }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Render');
      setCount((preCount) => preCount + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="mt-10  rounded-md border-2 border-cyan-800  px-14 
         py-10 text-4xl font-bold"
    >
      <div>{count}</div>
    </div>
  );
}

export default Cleanup;
