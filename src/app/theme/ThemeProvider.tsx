import { FC, ReactNode, useMemo, useState } from 'react';
import type { Theme } from './ThemeContext';
import { ThemeContext } from './ThemeContext';

export interface ThemeProps {
    startTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProps> = ({ children, startTheme = 'dark' }) => {
    const [theme, setTheme] = useState<Theme>(startTheme);

    const value = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>)
}

export default ThemeProvider;