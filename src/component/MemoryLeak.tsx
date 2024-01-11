import { useCallback, useState } from 'react';
import Cleanup from './Cleanup';

function MemoryLeak() {
  const [hide, setHide] = useState(false);

  const toggleOpen = useCallback(() => {
    setHide((value) => !value);
  }, []);

  return (
    <div className="space-y-2">
      <button type="button" onClick={toggleOpen}>
        {!hide ? 'Hide' : 'Show'}
      </button>
      {!hide && <Cleanup />}
    </div>
  );
}

export default MemoryLeak;
