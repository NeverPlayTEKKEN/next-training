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
    router.push('/game')
  }

  return (
    <div>
      <Button text="start" handleClick={startButtonClicked}/>
      <Button text="new game" />
      <Button text="setting" handleClick={settingButtonClicked}/>
      {isVisible && (
        <PopUp handleClick={settingButtonClicked} tittle="setting" contents={<div>this is desicription</div>}/>
      )}
    </div>
  );
};

export default HomePage;