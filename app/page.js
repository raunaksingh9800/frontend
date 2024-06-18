
import { Group } from "@mantine/core"
import GlobeDemo from "./AccUI/globeExport"
import Image from "next/image"
import NASJSpic from '/public/NAS-JS-Logo.png'
import Link from "next/link"
import { FlipWords } from "./AccUI/flip-words"


export const metadata = {
    title: "NAS Js",
    description: "this is a webapplication to use NAS Js",
    keywords : "NAS Js , NAS Js Home Page , NAS Js Get Started",
    Author : "Raunak Singh"
  };
export default function page() {
    const Returnbaseenv = ({text}) => {return <>{text}</>}
    const words = ["NAS" ,"Fast", "Better"]
    return (
        <>
        <div className="w-screen h-sceen flex flex-col">
        <nav className="fixed top-0 z-10 w-screen h-14 ">
            <Group justify="space-between"  className="flex flex-row  items-center ">
                <div className="flex flex-row ml-2 md:ml-5 justify-center items-center">
                    <Image alt="Logo" src={NASJSpic} width={30} />
                     <div className="text-lg font-bold pl-1"><FlipWords duration={2000} words={words} /> </div>
                </div>
                <div className="h-14 text-xs md:text-sm w-[100px] md:w-[400px] gap-6 md:gap-8 flex flex-row justify-end mr-4 md:mr-8 opacity-70 items-center ">
                    <Link href="/login" >{(process.env.TYPE === "demo")? <Returnbaseenv text="Demo" /> : <Returnbaseenv text="Login" />  }</Link>
                    <Link href="https://github.com/raunaksingh9800/NAS-System">Github</Link>
                    <Link href="https://www.instagram.com/raunak.apk/" >Contact</Link>
                </div>
            </Group>
        </nav>
        <article>
        <div className="mt-14 z-50 w-screen flex flex-col h-[90vh] justify-center items-center " >
            <div className=" text-xl md:text-4xl text-center font-semibold">
                The Database Framework for the World
            </div>
            <div className=" w-[90vw] lg:w-[50vw] text-xs md:text-sm pt-3 md:pt-6 text-center">
                NAS Js enables you to enjoy high end data Network-attached storage System.
            </div>
            <div className="flex flex-row text-xs md:text-sm gap-4 mt-4 md:mt-8 z-10">
                <div className=" px-6 py-2  md:px-8 rounded-lg  border-black border-solid border-2 bg-black text-white">Get Started</div>
                <Link href={'/docs/Getting-Started/Installation'} className=" px-6 md:px-8 rounded-lg py-2 border-black border-solid border-2 ">Read Docs</Link>
            </div>
            </div>
        </article>
        </div>

        <div className="fixed bottom-[-250px] right-[-250px]" >
            <GlobeDemo   />
        </div>
        </>

    )
}