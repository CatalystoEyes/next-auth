import React from 'react'
import { useTheme } from '@/app/theme/useTheme';
import { MdOutlineDarkMode } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/navigation';

const RegistButtons = () => {
  const router = useRouter()
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
        <button onClick={() => router.back()} className="ml-3 mt-3"><IoArrowBack size={30} /></button>
        <button onClick={toggleTheme} className="mr-3 mt-3"><MdOutlineDarkMode size={30} /></button>
      </div>
    </div>
  )
}

export default RegistButtons;