"use client"
import HeaderButtons from "@/app/Components/Buttons/HeaderButtons";
import OAuthButtons from "@/app/Components/Buttons/OAuthButtons";
import CheckPolicy from "@/app/Components/FormComponents/FormComponents/CheckPolicy";
import SignComponent from "@/app/Components/FormComponents/FormComponents/SignComponent";
import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";

const AuthPage = () => {
    const router = useRouter()

    return (
        <div>
            <HeaderButtons />
            <div className="flex flex-col items-center">
                <h1 className="scroll-m-20 text-2xl tracking-tight lg:text-4xl mt-8">
                    Login in account
                </h1>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-3">
                    Enter your password & email
                </h3>
                <SignComponent />
                <Button className="mb-2 w-1/3" variant="ghost" onClick={() => router.push('/regist')}>Create new account</Button>
                <p className="text-lg text-muted-foreground mb-1">Continue with</p>
                <OAuthButtons />
                <CheckPolicy />
            </div>
        </div>
    )
}

export default AuthPage
