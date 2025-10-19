import React, {
  createContext,
  JSX,
  useContext,
  useState,
  useEffect,
} from "react";

interface themeContextType {
  theme: string;
  toggleTheme: () => void;
}

const themeContext = createContext<themeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [theme]);
  const toggleTheme = () => {
    const latestTheme = theme === "light" ? "dark" : "light";
    setTheme(latestTheme);
    localStorage.setItem("theme", latestTheme);
  };
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export const useTheme = () => useContext(themeContext);
