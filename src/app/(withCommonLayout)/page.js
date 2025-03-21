"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage = () => {

  const router = useRouter();

  const handleNavigation =()=>{
    router.push('/dashboard')
  }
  return (
    <div className='text-center'>
      <h1 className='text-3xl text-center'>Hello World</h1>
      <button onClick={handleNavigation} className='my-5'>Dashboard</button>
    </div>
  );
};

export default HomePage;