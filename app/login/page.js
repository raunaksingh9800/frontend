'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

const Main = dynamic(() => import('../AuthUI/login'), { ssr: false });



export default function Login() {
    const [formData, setFormData] = useState({
        valueOne: '',
        valueTwo: ''
      });
      const handleDataChange = (key, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [key]: value
        }));
      };
  return (
    <Main 
    onData={handleDataChange}
    onButtonClick={() => {
        alert(formData.valueOne)
    }} 
    heading={"Welcome Back 😄"} subHeading={'Please Enter Your Username And Password'} textOne={'Username'} valueOne={'123'} textTwo={'Password'} valueTwo={'123'} forgot={'Forgot password?'} forgotLink={'/docs/password#forgot-password-'} buttonText={'Login'}
    />
  )
}