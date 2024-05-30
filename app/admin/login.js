"use client";
import Image from 'next/image'


import Bgpic from '/public/Light-Gradient.png'
import NASJSpic from '/public/LOGO-with-text.png'

import { Button, Input, PasswordInput } from '@mantine/core';

import Link from 'next/link';



const Desktop = () => {
  return (
    <section  id='mainframe' className=' w-screen h-screen flex flex-col justify-center items-center' >
    <div className='w-[450px] h-[400px] bg-white z-10 border-black border-solid border-[0.5px] rounded-[10px] flex flex-col '>
      <div className='w-full h-[60px]  flex flex-col'>
       <div className='pl-[14px] pt-[5px]'>
          <Image 
            src={NASJSpic}
            alt='NAS Js Logo'
            width={150}
          />
        </div>
      </div>
      <div className='w-full h-[70px] '> 
          <div className='pl-[30px] pt-[14px]'>
            <h1 className='text-[20px] font-bold'>Welcome Back 😄</h1>
            <p className='pt-[2px] text-[12px] font-light '>Please Enter Your Username And Password</p>
          </div>

        </div>
        <div className='w-full h-[80px] pt-[12px] flex flex-col items-center'>
          <div className=' w-[87%]  flex flex-col justify-center'>
            <p className=' opacity-80 pb-2 text-[14px]'>Username</p>
            <Input placeholder='Enter Your Username' />
          </div>
        </div>
        <div className='w-full h-[80px] pt-[10px] flex flex-col items-center'>
          <div className=' w-[87%]  flex flex-col justify-center'>
            <p className='opacity-80 pb-2 text-[14px]'>Password</p>
            <PasswordInput placeholder='Enter Your Password'  />
          </div>
        </div>
        <div className=' w-full h-[20px] mt-[2px] flex flex-col items-end' >
        <Link href='/doc/Password' className='text-[10px] opacity-50 pr-[6%]'>Forgot Password?</Link>

        </div>
        <div className=' w-full h-[40px] mt-[16px] flex flex-col items-center' >
          <div className='w-[87%]  flex flex-col justify-center' >
              <Button variant="filled" color="rgba(0, 0, 0, 1)" fullWidth  >Login</Button>
          </div>
        </div>
    </div>   
    <Image
    alt="Mountains"
    src={Bgpic}
    quality={100}
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
    }}
  />
  </section>
  )
}


const Mobile = () => {
  return (
    <section className=' w-screen h-screen flex flex-col overflow-hidden items-center' >
    <div className='w-[99%] h-[400px] z-10  flex flex-col '>
      <div className='w-full h-[60px]  flex flex-col'>
       <div className='pl-[10px] pt-[5px]'>
          <Image 
            src={NASJSpic}
            alt='NAS Js Logo'
            width={160}
          />
        </div>
      </div>
      <div className='w-full h-[70px] '> 
          <div className='pl-[30px] pt-[25px]'>
            <h1 className='text-[24px] font-bold'>Welcome Back 😄</h1>
            <p className='pt-[2px] text-[14px] font-light '>Please Enter Your Username And Password</p>
          </div>

        </div>
        <div className='w-full h-[80px] pt-[40px] flex flex-col items-center'>
          <div className=' w-[87%]  flex flex-col justify-center'>
            <p className=' opacity-80 pb-2 text-[15px]'>Username</p>
            <Input variant="unstyled" className='border-black border-solid border-[1px] rounded-[4px] pl-[7px]' placeholder='Enter Your Username' />
          </div>
        </div>
        <div className='w-full h-[80px] pt-[48px] flex flex-col items-center'>
          <div className=' w-[87%]  flex flex-col justify-center'>
            <p className='opacity-80 pb-2 text-[15px]'>Password</p>
            <PasswordInput variant="unstyled"  className='border-black border-solid border-[1px] rounded-[4px] pl-[7px]' placeholder='Enter Your Password'  />
          </div>
        </div>
        <div className=' w-full h-[20px] mt-[44px] flex flex-col items-end' >
          <Link href='/doc/Password' className='text-[10px] opacity-50 pr-[6%]'>Forgot Password?</Link>
        </div>
        <div className=' w-full h-[40px] mt-[24px] flex flex-col items-center' >
          <div className='w-[87%]  flex flex-col justify-center' >
              <Button variant="filled" color="rgba(0, 0, 0, 1)" fullWidth >Login</Button>
          </div>
        </div>
    </div>   
    <Image
    alt="Mountains"
    src={Bgpic}
    quality={100}
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
    }}
  />
  </section>
  )
}


export default function Main() {
  const isMobile = () => window.innerWidth <= 768;
  return (
    <>
    {
      isMobile() ? <Mobile /> : <Desktop /> 
    }
    </>

    
  );
}