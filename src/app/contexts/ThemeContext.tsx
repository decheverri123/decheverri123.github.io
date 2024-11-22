"use client";

import { createContext, useContext } from "react";

type ThemeContextType = {
  theme: string;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "navypink",
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={{ theme: "navypink" }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
