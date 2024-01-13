import { useCallback, useState } from 'react';

const useToggleOpen = (): [boolean, () => void] => {
  const [hide, setHide] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setHide((value) => !value);
  }, []);

  return [hide, toggleOpen];
};

export default useToggleOpen;
