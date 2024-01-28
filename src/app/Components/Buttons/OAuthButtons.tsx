import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const OAuthButtons = () => {
    return (
        <div className='flex flex-col justify-between w-1/3'>
            <Button className="mb-2 mx-1" variant="outline"><FaGithub />&nbsp;GitHub</Button>
            <Button className="mb-2 mx-1" variant="outline"><FaGoogle />&nbsp;Google</Button>
        </div>
    )
}

export default OAuthButtons
