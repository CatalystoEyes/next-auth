import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import ToggleThemeButton from './ToggleThemeButton';

const RegistButtons = () => {
  const router = useRouter()

  return (
    <div>
      <div className="flex justify-between">
        <button onClick={() => router.back()} className="ml-3 mt-3"><IoArrowBack size={30} /></button>
        <ToggleThemeButton />
      </div>
    </div>
  )
}

export default RegistButtons;