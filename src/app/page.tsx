"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import SignComponent from "./Components/FormComponents/FormComponents/SignComponent"
import AuthButtons from "./Components/Buttons/AuthHeaderButtons";
import OAuthButtons from "./Components/Buttons/OAuthButtons";
import CheckPolicy from "./Components/FormComponents/FormComponents/CheckPolicy";
import { useEffect, useState } from "react";


export default function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('/users');
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   }
  //   fetchData();
  // }, []);

  // console.log(data)

  const router = useRouter()
  return (<>
    <AuthButtons />
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
    </div></>)
}

