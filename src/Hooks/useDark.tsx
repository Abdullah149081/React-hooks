import { useCallback, useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

type TUseDark = [boolean, () => void];

const useDark = (): TUseDark => {
  const contextValue = useContext(ThemeContext);

  if (!contextValue) {
    throw new Error('useDark must be used within a ThemeProvider');
  }

  const { dark, setDark } = contextValue;

  const toggleOpen = useCallback(() => {
    setDark((value) => !value);
  }, [setDark]);

  return [dark, toggleOpen];
};

export default useDark;
