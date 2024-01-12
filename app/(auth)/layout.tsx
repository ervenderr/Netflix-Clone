import { ReactNode } from 'react'
import Image from 'next/image'
import BackgroundImage from '../../public/netflix-bg.jpg'
import Logo from '../../public/netflix-logo.png'

export default function AuthLayout({children}: {children: ReactNode}) {
    return (
        <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
            <Image src={BackgroundImage}
            alt='background' 
            fill className='absolute -z-10 hidden opacity-70 sm:flex sm:object-cover' 
            priority/>

            <Image src={Logo} 
            alt='logo' 
            width={167} 
            height={167} 
            className='absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6' 
            priority/>
            
            {children}
        </div>
    )
}
