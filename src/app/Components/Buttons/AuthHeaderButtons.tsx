import React from 'react'
import { useTheme } from '@/app/theme/useTheme';
import { MdOutlineDarkMode } from "react-icons/md";
import { FaGithub } from 'react-icons/fa';

const AuthButtons = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        const updatedTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(theme === 'light' ? 'dark' : 'light');
        console.log(theme)
        document.documentElement.className = updatedTheme;
    };

    return (
        <div>
            <div className="flex justify-between">
                <a href="https://github.com/CatalystoEyes/next-auth" target='_blank' className="ml-3 mt-3"><FaGithub size={30} /></a>
                <button onClick={toggleTheme} className="mr-3 mt-3"><MdOutlineDarkMode size={30} /></button>
            </div>
        </div>
    )
}

export default AuthButtons;