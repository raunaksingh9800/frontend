
import dynamic from 'next/dynamic';

const Main = dynamic(() => import('../AuthUI/login'), { ssr: false });

export default function Admin() {
  return (
    <Main 
    heading={"Welcome Back 😄"} subHeading={'Please Enter Your Username And Password'} textOne={'Username'} valueOne={''} textTwo={'Password'} valueTwo={''} forgot={'Forgot password?'} forgotLink={'/docs/password#forgot-password-'} buttonText={'Login'}
    />
  )
}