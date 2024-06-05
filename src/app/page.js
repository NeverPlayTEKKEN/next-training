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
    router.push('/mypage')
  }

  return (
    <div>
      <h1 class="text-3xl font-bold">This is login page</h1>
      <Button text="ログイン" handleClick={startButtonClicked}/>
      <Button text="新規登録" />
      <Button text="設定" handleClick={settingButtonClicked}/>
      {isVisible && (
        <PopUp handleClick={settingButtonClicked} tittle="setting" contents={<div>this is desicription</div>}/>
      )}
    </div>
  );
};

export default HomePage;