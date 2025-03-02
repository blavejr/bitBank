import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of our theme context
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Create the context with a default value (null)
const ThemeContext = createContext<ThemeContextType | null>(null);

// ThemeProvider component to wrap around the app
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light"); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
