import { forwardRef } from 'react';

type ClassName = {
  className: string;
};

const PasswordInput = forwardRef<HTMLInputElement, ClassName>(
  ({ className }, inputRef) => {
    return (
      <div className="mb-5">
        <label
          htmlFor="password"
          className="mb-2 block text-start text-sm font-medium text-gray-900 "
        >
          Your password
        </label>
        <input
          ref={inputRef}
          type="password"
          name="password"
          id="password"
          className={className}
          required
        />
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
