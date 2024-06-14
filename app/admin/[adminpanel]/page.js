"use client";
import { useSearchParams , useRouter } from 'next/navigation';

export default function Page({ params }) {

  const searchParams = useSearchParams();
  const color = searchParams.get('color');
  const size = searchParams.get('size');
  console.log(color)
  // const router = useRouter();
  // const { id, color, size } = router.query
  return (
   <>
   <h1> 
    ks
    </h1></>
  )
}