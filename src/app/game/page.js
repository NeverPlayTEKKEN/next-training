'use client'
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

const Button = dynamic(() => import('@/components/Button'), {
  ssr: false
});

const PopUp = dynamic(() => import('@/components/PopUp'), {
  ssr: false
});

const PostReview = dynamic(() => import('@/components/PostReview'), {
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
      <input></input>
      <Button text="検索" />
      <h1>マイページ</h1>
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