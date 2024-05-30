
import dynamic from 'next/dynamic';

const Main = dynamic(() => import('./login'), { ssr: false });

export default function Admin() {
  return (
    <Main />
  )
}