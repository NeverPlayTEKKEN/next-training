'use client'

import dynamic from 'next/dynamic';

const Button = dynamic(() => import('@/components/Button'), {
    ssr: false
  });

const Icon = dynamic(() => import('@/components/Icon'), {
    ssr: false
});

const Header = () => {
    return (
        <div >
            <header class="boerder border-b h-16">
                <div>
                    <div class="flex justify-center">
                        <input type="text" class="border p-2 w-1/3"></input>
                        <Button text="検索"/>
                    </div>
                    <Icon />
                </div>
            </header>
        </div>
    )
}

export default Header