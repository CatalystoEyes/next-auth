import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useRouter, usePathname } from 'next/navigation';
import ToggleThemeButton from './ToggleThemeButton';
import { FaGithub } from 'react-icons/fa';

const HeaderButtons = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div>
      <div className="flex justify-between">
        {pathname == '/regist' ? <button onClick={() => router.back()} className="ml-3 mt-3"><IoArrowBack size={30}
        /></button> : <a href="https://github.com/CatalystoEyes/next-auth" target='_blank' className="ml-3 mt-3"><FaGithub size={30} /></a>
        }
        <ToggleThemeButton />
      </div>
    </div>
  )
}

export default HeaderButtons;