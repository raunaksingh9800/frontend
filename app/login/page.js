'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import axios from 'axios';
import crypto from 'crypto'
const Main = dynamic(() => import('../components/AuthUI/login'), { ssr: false });
// useRouter
import { useRouter } from 'next/navigation'
 

const hashCredentials = (username, password) => {
  const hash = crypto.createHash('sha256');
  hash.update(username + password);
  return hash.digest('hex');
}
export default function Login() {
  const router = useRouter()
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
        if(process.env.NEXT_PUBLIC_TYPE !="demo"){
          e.preventDefault();
          const HASKEY = hashCredentials(formData.valueOne , formData.valueTwo)
      
          try {
            const response = await axios.post('http://localhost:3001/login', { 
              "payload" : `${HASKEY}`
            });
            setData(response.data)
            alert(response.data.accessToken)
          } catch (error) {
            alert("ERROR:" + error)
          } finally {
            alert("done")
          }
       }
       else {
        router.push(`/dashboard/main?username=${formData.valueOne}`)
       }
      };
  const subHeading = () => {
    if (process.env.NEXT_PUBLIC_TYPE == "demo")
    { 
        return "Please Enter A Username Of Your Choise"
    }
      else {return "Please Enter Your Username And Password"}
  } 
  return (
    <Main 
    onData={handleDataChange}
    onButtonClick={handleSubmit} 
    heading={"Welcome Back 😄"} subHeading={subHeading()} textOne={'Username'} valueOne={''} textTwo={'Password'} valueTwo={'Once Upon A time...'} forgot={'Forgot password?'} forgotLink={'/docs/password#forgot-password-'} buttonText={'Login'}
    />
  )
}

