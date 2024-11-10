'use client'
import { headerItems, userinfo } from "@/constant/constant";
import Image from "next/image";
import {Link as ScrollLink} from 'react-scroll'

export default function Intro() {
    return (
        <section id={headerItems.home.page}
        className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start"
        >
            <div>
            <Image
                 src="/usaid.jpg"
                 alt="dp"
                 width={300}
                 height={300}
                 className="rounded-full shadow-2xl mt-10"
/>

            </div>
            <div className="md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className="text-5xl uppercase hidden md:block">Electronic & AI Generative Engineer</h1>
                <h1 className="text-2xl mt-5 md:text-3xl">Hi, I&#39;m , <span className="text-red-600 md:text-4xl">{userinfo.name}</span>
                </h1>
                <p className="mt-4 mb-4"
                dangerouslySetInnerHTML={{__html: userinfo.heading}}/>
                <ScrollLink
                    to={headerItems.project.page}
                    className="bg-teal-600 flex items-center justify-center cursor-pointer w-28 h-10 text-white rounded"
                    spy={true}
                    smooth={true}
                > Projects </ScrollLink>
            </div>
        </section>
    );
}
