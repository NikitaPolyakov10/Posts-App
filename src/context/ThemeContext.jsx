import { createContext, useCallback } from "react";
import { setTheme } from "../actions/sync/changeTheme";
import { useSelector, useDispatch } from "react-redux";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storeTheme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();

  const storeToggleTheme = useCallback(() => {
    storeTheme === 'light' ? dispatch(setTheme('dark')) : dispatch(setTheme('light'))
  }, [storeTheme, dispatch])
  
  return (
    <ThemeContext.Provider value={{ storeTheme, storeToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};