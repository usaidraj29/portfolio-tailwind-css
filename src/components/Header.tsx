'use client'
import { useState } from 'react';
import { userinfo } from '@/constant/constant';
import { headerItems } from '@/constant/constant';
import { Navitems } from '@/models/Header';
import { BiMenu } from 'react-icons/bi';
import {Link as ScrollLink} from 'react-scroll'


export default function Header() {
    const [navitem, showNavitems] = useState<boolean>(false)

    return (
        <header className=' bg-white p-6 fixed top-0 w-full justify-between z-10 md:flex'>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold'>{userinfo.name}</h2>
                <BiMenu
                    size={30}
                    className='md:hidden'
                    onClick={()=> showNavitems(prevState => !prevState)}
                />
            </div>
            <div className={`mr-8 md:space-x-6 mt-3 md:mt-0 md:block ${ navitem ? 'block' : 'hidden' }`}>
                {
                    Object.keys(headerItems).map((item) => (
                        <ScrollLink 
                            to={headerItems[item as keyof Navitems].page}
                            key={headerItems[item as keyof Navitems].label} // Correctly set the key prop here
                            className='block md:inline-block cursor-pointer'
                            spy={true}
                            smooth={true}
                        >
                            {headerItems[item as keyof Navitems].label}
                        </ScrollLink>
                    ))
                }
            </div>
        </header>
    );
}
