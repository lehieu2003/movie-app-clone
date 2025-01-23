/**
 * Theme context and provider for managing theme-related state and functionality.
 *
 * @file themeContext.tsx
 * @description Provides a context for managing theme options, including dark and light modes, and system theme detection.
 */

import React, { useContext, useState, useEffect, useCallback } from "react";
import { saveTheme, getTheme } from "@/utils/helper";

/**
 * Initial context values and functions for theme management.
 */
const context = React.createContext({
  /**
   * Function to set the visibility of theme options.
   * @param prev - Previous state of showThemeOptions.
   */
  setShowThemeOptions: (prev: boolean) => {},

  /** State indicating whether theme options are visible. */
  showThemeOptions: false,

  /** Function to open the theme options menu. */
  openMenu: () => {},

  /** Function to close the theme options menu. */
  closeMenu: () => {},

  /**
   * Function to set the current theme.
   * @param newTheme - The new theme to be set.
   */
  setTheme: (newTheme: string) => {},

  /** Function to check and set the system theme. */
  checkSystemTheme: () => {},

  /** Current theme value. */
  theme: "",
});

interface Props {
  /** React children nodes to be rendered within the provider. */
  children: React.ReactNode;
}

const initialTheme = getTheme();

/**
 * ThemeProvider component to provide theme context to its children.
 *
 * @param children - React children nodes to be rendered within the provider.
 * @returns JSX.Element
 */
const ThemeProvider = ({ children }: Props) => {
  const [showThemeOptions, setShowThemeOptions] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(initialTheme);

  /**
   * Checks the system theme and sets the theme state accordingly.
   */
  const checkSystemTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("Dark");
    } else {
      setTheme("Light");
    }
  };

  /**
   * Checks and sets the initial theme if not already set.
   */
  const checkTheme = useCallback(() => {
    if (initialTheme) return;
    setTheme("Dark");
  }, []);

  useEffect(() => {
    checkTheme();
  }, [checkTheme]);

  useEffect(() => {
    if (theme === "Dark") {
      document.documentElement.classList.add("dark");
      saveTheme("Dark");
    } else if (theme === "Light") {
      document.documentElement.classList.remove("dark");
      saveTheme("Light");
    }
  }, [theme]);

  /**
   * Opens the theme options menu.
   */
  const openMenu = () => {
    setShowThemeOptions(true);
  };

  /**
   * Closes the theme options menu.
   */
  const closeMenu = useCallback(() => {
    setShowThemeOptions(false);
  }, []);

  return (
    <context.Provider
      value={{
        showThemeOptions,
        openMenu,
        closeMenu,
        setTheme,
        theme,
        checkSystemTheme,
        setShowThemeOptions,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ThemeProvider;

/**
 * Custom hook to use the theme context.
 *
 * @returns Theme context values and functions.
 */
export const useTheme = () => {
  return useContext(context);
};
