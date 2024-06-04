'use client'

import React from 'react';
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Button = dynamic(() => import('@/components/Button'), {
  ssr: false
});

const PopUp = dynamic(() => import('@/components/PopUp'), {
  ssr: false
});


const HomePage = () => {

  const [isVisible, setVisible] = useState(false)
  const router = useRouter();

  const settingButtonClicked = () => {
    setVisible(!isVisible)
  }

  const startButtonClicked = () => {
    router.push('/about')
  }

  return (
    <div>
      <Button text="start" handleClick={startButtonClicked}/>
      <Button text="new game" />
      <Button text="setting" handleClick={settingButtonClicked}/>
      {isVisible && (
        <PopUp handleClick={settingButtonClicked}/>
      )}
    </div>
  );
};

export default HomePage;