import { createContext } from "react";

export type Theme = 'light' | 'dark'

export interface ITheme {
    theme: Theme
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ITheme>({
    theme: 'dark',
    setTheme: () => { }
});