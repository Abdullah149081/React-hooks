import { useEffect, useRef } from 'react';
import PasswordInput from '../component/PasswordInput';

function UseRef() {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus();
  }, []);

  return (
    <form className="mx-auto mt-10 max-w-sm">
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-2 block text-start text-sm font-medium text-gray-900 "
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <PasswordInput
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        ref={myRef}
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default UseRef;
