"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { useRouter } from "next/navigation";
import SignComponent from "./Components/FormComponents/SignComponent"
export default function Home() {
  const router = useRouter()
  return <>
    <div className="flex justify-between">
      <a href="https://github.com/CatalystoEyes/next-auth" target='_blank' className="ml-3 mt-3"><FaGithub size={30} /></a>
      <button className="mr-3 mt-3"><MdOutlineDarkMode size={30} /></button>
    </div>
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
}