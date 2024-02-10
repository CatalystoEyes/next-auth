import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react"
import { useSearchParams } from 'next/navigation';

const OAuthButtons = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || "/profile"
    return (
        <div className='flex flex-col justify-between w-1/3'>
            <Button onClick={() => signIn('github', { callbackUrl })} className="mb-2 mx-1" variant="outline"><FaGithub />&nbsp;GitHub</Button>
            <Button onClick={() => signIn('google')} className="mb-2 mx-1" variant="outline"><FaGoogle />&nbsp;Google</Button>
        </div>
    )
}

export default OAuthButtons
