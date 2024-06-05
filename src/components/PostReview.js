'use client'

import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const Button = dynamic(() => import('@/components/Button'), {
    ssr: false
  });

const StarRating = dynamic(() => import('@/components/StarRating'), {
    ssr: false
});

const PostReview = (props) => {
    
    return (
        <div>
            <h1>レビュー投稿ページ</h1>
            <Button text="画像をアップロード"/>
            <StarRating />
            <input class="border border-black px-2 py-1"></input>
            <Button text="送信" handleClick={props.handleClick}/>
        </div>
    )
}

export default PostReview;