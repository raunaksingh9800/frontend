"use client";
import dynamic from 'next/dynamic';
import { useSearchParams  } from 'next/navigation';

import { useState } from 'react';

const Main = dynamic(() => import('../../components/AuthUI/login'), { ssr: false });

export default function Login() {
  const searchParams = useSearchParams();
  const IP = searchParams.get('ip');
  const AUTHKEY = searchParams.get('authkey');
  const [formData, setFormData] = useState({
      valueOne: AUTHKEY,
      valueTwo: IP
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
  heading={"Welcome 😄"} subHeading={'Please Enter Your Auth Key And IP given by the Backend CLI '} textOne={'Authentication Key'} valueOne={formData.valueOne} textTwo={'IP Address'} valueTwo={formData.valueTwo} forgot={'Need Help?'} forgotLink={'/docs/password#forgot-password-'} buttonText={'Access'}
  />
)
}