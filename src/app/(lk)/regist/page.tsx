"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import RegistComponent from '@/app/Components/FormComponents/FormComponents/RegistComponent'
import HeaderButtons from '@/app/Components/Buttons/HeaderButtons'
import { useRouter } from 'next/navigation'
import OAuthButtons from '@/app/Components/Buttons/OAuthButtons'
import CheckPolicy from '@/app/Components/FormComponents/FormComponents/CheckPolicy'
const RegistPage = () => {
    const router = useRouter()

    return (
        <>
            <HeaderButtons />
            <div className="flex flex-col items-center">
                <h1 className="scroll-m-20 text-xl tracking-tight lg:text-4xl mt-8">
                    Create an account
                </h1>
                <RegistComponent />
                <Button className="mb-2 w-1/3" variant="ghost" onClick={() => router.back()}>Already have an account</Button>
                <p className="text-lg text-muted-foreground mb-1">Continue with</p>
                <OAuthButtons />
                <CheckPolicy />
            </div>
        </>
    )
}

export default RegistPage
