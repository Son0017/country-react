import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const hireContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used in ThemeProvide");
  }
  // console.log(context);
  return context;
};
