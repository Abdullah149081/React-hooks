import React from 'react';
import useDark from '../Hooks/useDark';

function DarkTheme() {
  const [dark, toggleOpen] = useDark();

  return (
    <div>
      <button
        type="button"
        onClick={toggleOpen}
        className={`${dark ? 'text-white' : 'text-black'}`}
      >
        {dark ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
}

export default DarkTheme;
