"use client"
import React from 'react'
import { FaGithub } from 'react-icons/fa';
import ToggleThemeButton from './ToggleThemeButton';


const AuthButtons = () => {

    return (
        <div>
            <div className="flex justify-between">
                <a href="https://github.com/CatalystoEyes/next-auth" target='_blank' className="ml-3 mt-3"><FaGithub size={30} /></a>
                <ToggleThemeButton />
            </div>
        </div>
    )
}

export default AuthButtons;