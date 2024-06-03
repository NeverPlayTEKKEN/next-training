import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Button = dynamic(() => import('@/components/Button'), {
  ssr: false
});

const HomePage = () => {
  return (
    <div>
      <Button text="start" />
      <Button text="new game" />
      <Button text="setting" />
    </div>
  );
};

export default HomePage;