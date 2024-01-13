const wrapperFunc = (func: (arg: number) => number) => {
  return (num: number) => {
    return func(num) * 3;
  };
};

const addOne = (num: number) => {
  return num + 1;
};

const result = addOne(3);
console.log('🚀 ~ file: HigherFunc.ts:12 ~ result:', result);

const resultWrapper = wrapperFunc(addOne);
console.log('🚀 ~ file: HigherFunc.ts:15 ~ resultWrapper:', resultWrapper(5));

/**  
=================
console.log(' ~ resultWrapper:', resultWrapper(5));:
Calls the resultWrapper function (the wrapped version of addOne) with the argument 5.
resultWrapper calls addOne(5), which returns 6.
resultWrapper then multiplies 6 by 3, resulting in 18.
Prints ~ resultWrapper: 18.
=================
* */
