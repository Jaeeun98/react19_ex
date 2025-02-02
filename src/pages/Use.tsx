import { createContext, useState } from "react";
import ThemeDisplay from "../components/ThemeDisplay";

export const ThemeContext = createContext("light");

const Use = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <h1>Use</h1>
      <div>
        <button
          onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        >
          <span>테마 변경</span>
        </button>
      </div>
      <ThemeContext.Provider value={theme}>
        <ThemeDisplay />
      </ThemeContext.Provider>
    </div>
  );
};

export default Use;
