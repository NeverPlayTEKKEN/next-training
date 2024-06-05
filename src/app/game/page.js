'use client'
import dynamic from 'next/dynamic';
import React from 'react';
import { useRouter } from 'next/navigation'

const Button = dynamic(() => import('@/components/Button'), {
  ssr: false
});

const MyPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/post_review')
  }

  return (
    <div>
      <input></input>
      <Button text="検索" />
      <h1>マイページ</h1>
      <p>最初のページです</p>
      <Button text="レビューを見る"/>
      <Button text="投稿する" handleClick={handleClick}/>
    </div>
  );
};

export default MyPage;