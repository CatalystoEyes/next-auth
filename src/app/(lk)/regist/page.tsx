"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
const RegistComponent = () => {
    const router = useRouter()
    return (
        <>
            <div className="flex justify-between">
                <button onClick={() => router.back()} className="ml-3 mt-3"><IoArrowBack size={30} /></button>
                <button className="mr-3 mt-3"><MdOutlineDarkMode size={30} /></button>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="scroll-m-20 text-xl tracking-tight lg:text-3xl mt-8">
                    Create an account
                </h1>
                <div className="w-1/3 mt-10">
                    <Input className="mb-4" type="text" placeholder="Nickname" />
                    <Input className="mb-4" type="email" placeholder="Email" />
                    <Input className="mb-4" type="password" placeholder="Password" />
                </div>
                <Button className="mb-4 w-1/3">Sign up</Button>
                <Button className="mb-2 w-1/3" variant="ghost" onClick={() => router.back()}>Already have an account</Button>
                <p className="text-lg text-muted-foreground mb-1">Continue with</p>
                <Button className="mb-2 mx-1 w-1/3" variant="outline"><FaGithub />&nbsp;GitHub</Button>
                <Button className="mb-2 mx-1 w-1/3" variant="outline"><FaGoogle />&nbsp;Google</Button>
                <div className="flex items-center space-x-2 mt-1">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <small className="tracking-tight first:mt-0">
                    Check our{" "}
                    <a
                        href="#"
                        className="font-medium text-primary underline underline-offset-4"
                    >
                        Terms agree
                    </a>{" "}
                    and{" "}
                    <a
                        href="#"
                        className="font-medium text-primary underline underline-offset-4"
                    >
                        Privacy Policy
                    </a>
                </small>
            </div>
        </>
    )
}

export default RegistComponent
