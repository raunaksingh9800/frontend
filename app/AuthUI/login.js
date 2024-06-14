'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button, Input, PasswordInput } from '@mantine/core';
import Link from 'next/link';
import Bgpic from '/public/Light-Gradient.png';
import NASJSpic from '/public/LOGO-with-text.png';

const Desktop = ({ heading, subHeading, textOne, valueOne, textTwo, valueTwo, forgot, forgotLink, buttonText, onData, onButtonClick }) => {
  return (
    <section id='mainframe' className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='w-[450px] h-[400px] bg-white z-10 border-black border-solid border-[0.5px] rounded-[10px] flex flex-col'>
        <div className='w-full h-[60px] flex flex-col'>
          <div className='pl-[14px] pt-[5px]'>
            <Image src={NASJSpic} alt='NAS Js Logo' width={150} />
          </div>
        </div>
        <div className='w-full h-[70px]'>
          <div className='pl-[30px] pt-[14px]'>
            <h1 className='text-[20px] font-bold'>{heading}</h1>
            <p className='pt-[2px] text-[12px] font-light '>{subHeading}</p>
          </div>
        </div>
        <div className='w-full h-[80px] pt-[12px] flex flex-col items-center'>
          <div className='w-[87%] flex flex-col justify-center'>
            <p className='opacity-80 pb-2 text-[14px]'>{textOne}</p>
            <Input placeholder={`Enter Your ${textOne}`} value={valueOne} onChange={(e) => onData('valueOne', e.target.value)} />
          </div>
        </div>
        <div className='w-full h-[80px] pt-[10px] flex flex-col items-center'>
          <div className='w-[87%] flex flex-col justify-center'>
            <p className='opacity-80 pb-2 text-[14px]'>{textTwo}</p>
            <PasswordInput placeholder={`Enter Your ${textTwo}`} value={valueTwo} onChange={(e) => onData('valueTwo', e.target.value)} />
          </div>
        </div>
        <div className='w-full h-[20px] mt-[2px] flex flex-col items-end'>
          <Link href={forgotLink} className='text-[10px] opacity-50 pr-[6%]'>{forgot}</Link>
        </div>
        <div className='w-full h-[40px] mt-[16px] flex flex-col items-center'>
          <div className='w-[87%] flex flex-col justify-center'>
            <Button onClick={onButtonClick} variant="filled" color="rgba(0, 0, 0, 1)" fullWidth>{buttonText}</Button>
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
  );
};

const Mobile = ({ heading, subHeading, textOne, valueOne, textTwo, valueTwo, forgot, forgotLink, buttonText, onData, onButtonClick }) => {
  return (
    <section className='w-screen h-screen flex flex-col overflow-hidden items-center'>
      <div className='w-[99%] h-[400px] z-10 flex flex-col'>
        <div className='w-full h-[60px] flex flex-col'>
          <div className='pl-[10px] pt-[5px]'>
            <Image src={NASJSpic} alt='NAS Js Logo' width={160} />
          </div>
        </div>
        <div className='w-full h-[70px]'>
          <div className='pl-[30px] pt-[25px]'>
            <h1 className='text-[24px] font-bold'>{heading}</h1>
            <p className='pt-[2px] text-[14px] font-light '>{subHeading}</p>
          </div>
        </div>
        <div className='w-full h-[80px] pt-[40px] flex flex-col items-center'>
          <div className='w-[87%] flex flex-col justify-center'>
            <p className='opacity-80 pb-2 text-[15px]'>{textOne}</p>
            <Input variant="unstyled" placeholder={`Enter Your ${textOne}`} value={valueOne} onChange={(e) => onData('valueOne', e.target.value)} className='border-black border-solid border-[1px] rounded-[4px] pl-[7px]' />
          </div>
        </div>
        <div className='w-full h-[80px] pt-[48px] flex flex-col items-center'>
          <div className='w-[87%] flex flex-col justify-center'>
            <p className='opacity-80 pb-2 text-[15px]'>{textTwo}</p>
            <PasswordInput variant="unstyled" className='border-black border-solid border-[1px] rounded-[4px] pl-[7px]' placeholder={`Enter Your ${textTwo}`} value={valueTwo} onChange={(e) => onData('valueTwo', e.target.value)} />
          </div>
        </div>
        <div className='w-full h-[20px] mt-[44px] flex flex-col items-end'>
          <Link href={forgotLink} className='text-[10px] opacity-50 pr-[6%]'>{forgot}</Link>
        </div>
        <div className='w-full h-[40px] mt-[24px] flex flex-col items-center'>
          <div className='w-[87%] flex flex-col justify-center'>
            <Button onClick={onButtonClick}  variant="filled" color="rgba(0, 0, 0, 1)" fullWidth>{buttonText}</Button>
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
  );
};

export default function Main({ heading, subHeading, textOne, textTwo, forgot, forgotLink, buttonText, valueOne, valueTwo, onData , onButtonClick }) {
  const [formData, setFormData] = useState({
    valueOne: valueOne,
    valueTwo: valueTwo
  });

  const handleDataChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value
    }));
    onData(key, value);
  };

  const isMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    // Update the form data whenever props change
    setFormData({
      valueOne: valueOne,
      valueTwo: valueTwo
    });
  }, [valueOne, valueTwo]);

  return (
    <>
      {
        isMobile() ? (
          <Mobile
            heading={heading}
            subHeading={subHeading}
            textOne={textOne}
            valueOne={formData.valueOne}
            textTwo={textTwo}
            valueTwo={formData.valueTwo}
            forgot={forgot}
            forgotLink={forgotLink}
            buttonText={buttonText}
            onButtonClick = {onButtonClick}
            onData={handleDataChange}
          />
        ) : (
          <Desktop
            heading={heading}
            subHeading={subHeading}
            textOne={textOne}
            valueOne={formData.valueOne}
            textTwo={textTwo}
            valueTwo={formData.valueTwo}
            forgot={forgot}
            onButtonClick = {onButtonClick}
            forgotLink={forgotLink}
            buttonText={buttonText}
            onData={handleDataChange}
          />
        )
      }
    </>
  );
}
