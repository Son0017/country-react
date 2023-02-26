import { createContext, useReducer } from "react";

export const ThemeContext = createContext();
const handleChange = (state, action) => {
  switch (action.type) {
    case "Change_Filter":
      return { ...state, filter: action.payload };
    case "Input_Change":
      return { ...state, inputChange: action.payload };
    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleChange, {
    filter: "All",
    inputChange: "",
  });

  const changeFilter = (filtered) => {
    dispatch({ type: "Change_Filter", payload: filtered });
  };
  const changeInput = (inputChange) => {
    dispatch({ type: "Input_Change", payload: inputChange });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeFilter, changeInput }}>
      {children}
    </ThemeContext.Provider>
  );
};
