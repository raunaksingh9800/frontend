"use client"
import { useEffect } from "react";

export const metadata = {
  title: "NAS Js - Not Found",
};

export default function Custom404() {
  useEffect(()=> {
    console.log(`%c 
    ███╗   ██╗ █████╗ ███████╗         ██╗███████╗
    ████╗  ██║██╔══██╗██╔════╝         ██║██╔════╝
    ██╔██╗ ██║███████║███████╗         ██║███████╗
    ██║╚██╗██║██╔══██║╚════██║    ██   ██║╚════██║
    ██║ ╚████║██║  ██║███████║    ╚█████╔╝███████║
    ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝     ╚════╝ ╚══════╝ 
        `, "font-family:monospace; color: lightblue;")
  }, [])

    return (
      <>
      <article className="h-screen w-screen flex flex-col justify-center items-center">
        <h1 className=" text-[18rem] color opacity-25 font-bold">
          404
        </h1>
        <h2 className="text-[1.2rem] opacity-60 font-[500]">
         Oops! , The service you requested was not found
        </h2>
      </article>
      
      </>
    )
  }