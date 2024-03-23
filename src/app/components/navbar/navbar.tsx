import Image from 'next/image'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';


const NavBar = () => {
    return (
        <div className='h-[90px]'>
            <div className="container flex items-center justify-between h-full">
                <div className="logo">
                    <Image src="/images/logo/logo.png" width={200} height={100} alt="sakazuki" />
                </div>

                <div className='lg:flex gap-5 hidden items-center'>
                    <div>ABOUT</div>
                    <div>MERIT</div>
                    <div>FAQ</div>
                    <Button className='bg-[#1d4592]'>お問い合わせ</Button>
                </div>

                <div className='lg:hidden'>
                    <Sheet>
                        <SheetTrigger>
                            <Menu />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className='text-[35px] border-b-[1px] border-b-[#eee] mb-[15px]'>Menu</SheetTitle>
                                <div className='flex flex-col gap-5'>
                                    <div>ABOUT</div>
                                    <div>MERIT</div>
                                    <div>FAQ</div>
                                    <Button className='bg-[#1d4592]'>お問い合わせ</Button>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </div>
    )
}

export default NavBar