'use client';

import { createContext, useState } from 'react';

type  Theme = 'light'|'dark';
type ThemeContextType = { mode: Theme; toggle: () => void };

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<Theme>('dark');
  const toggle = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
