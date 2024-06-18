'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import axios from 'axios';
import crypto from 'crypto'
const Main = dynamic(() => import('../AuthUI/login'), { ssr: false });

const hashCredentials = (username, password) => {
  const hash = crypto.createHash('sha256');
  hash.update(username + password);
  return hash.digest('hex');
}
export default function Login() {
    const [data, setData] = useState(null);
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
      const handleSubmit = async (e) => {
        e.preventDefault();
        const HASKEY = hashCredentials(formData.valueOne , formData.valueTwo)
    
        try {
          const response = await axios.post('http://localhost:3001/login', { 
            "payload" : `${HASKEY}`
          });
          alert(response.data.accessToken)
        } catch (error) {
          alert("ERROR:" + error)
        } finally {
          alert("done")
        }
      };
  return (
    <Main 
    onData={handleDataChange}
    onButtonClick={handleSubmit} 
    heading={"Welcome Back 😄"} subHeading={'Please Enter Your Username And Password'} textOne={'Username'} valueOne={'123'} textTwo={'Password'} valueTwo={'123'} forgot={'Forgot password?'} forgotLink={'/docs/password#forgot-password-'} buttonText={'Login'}
    />
  )
}