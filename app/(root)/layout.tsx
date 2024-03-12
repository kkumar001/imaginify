import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='root'>
            <Sidebar />
            <MobileNav />
            <div className='root-container'>
                <div className='wrapper'>
                    {children}
                </div>
                <div className='w-full text-center flex items-center justify-center mt-10 h-[64px] bg-purple-500 rounded-full'>
                    <p className='text-white text-[24px]'>Developed by <b>Kailash Kumar &#x2764;</b></p>
                </div>
            </div>
            <Toaster />
        </main>
    )
}

export default Layout