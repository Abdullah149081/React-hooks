import React, { ReactNode, createContext, useMemo, useState } from 'react';

type TThemeChildren = {
  children: ReactNode;
};
export type TThemeContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<TThemeContext | null>(null);

function ThemeProvider({ children }: TThemeChildren) {
  const [dark, setDark] = useState(false);

  const values = useMemo(() => ({ dark, setDark }), [dark]);

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;
