const getClassName = (count: number): string => {
  let className = '';

  if (count >= 1) {
    className = 'text-lime-500';
  } else if (count < 0) {
    className = 'text-red-500';
  } else {
    className = 'text-black';
  }

  return className;
};

export default getClassName;
