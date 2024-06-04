'use client'

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Button = dynamic(() => import('@/components/Button'), {
  ssr: false
});

const PopUp = (props) => {
  return (
    <div>
      <p>hello world</p>
      <Button text="閉じる" handleClick={props.handleClick}/>
    </div>
  )
}

const HomePage = () => {

  const [isVisible, setVisible] = useState(false)

  const settingButtonClicked = () => {
    setVisible(!isVisible)
  }

  return (
    <div>
      <Button text="start" />
      <Button text="new game" />
      <Button text="setting" handleClick={settingButtonClicked}/>
      {isVisible && (
        <PopUp handleClick={settingButtonClicked}/>
      )}
    </div>
  );
};

export default HomePage;