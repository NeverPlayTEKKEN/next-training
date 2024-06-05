'use client'
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

const Button = dynamic(() => import('@/components/Button'), {
  ssr: false
});

const PostReview = dynamic(() => import('@/components/PostReview'), {
  ssr: false
});

const Header = dynamic(() => import('@/components/Header'), {
  ssr: false
});

const MyPage = () => {
  const router = useRouter();

  const [isPostVisible, setPostVisible] = useState(false);

  const handleClick = () => {
    setPostVisible(!isPostVisible);
  }

  const postButtonClicked = () => {
    setPostVisible(true)
  }

  return (
    <div>
      <Header />
      <h1 class="text-3xl font-bold">マイページ</h1>
      <p>最初のページです</p>
      <Button text="レビューを見る"/>
      <Button text="投稿する" handleClick={postButtonClicked}/>
      {isPostVisible && (
        <PostReview handleClick={handleClick}/>
      )}
    </div>
  );
};

export default MyPage;