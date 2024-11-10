import { headerItems, userinfo } from "@/constant/constant";
import Image from "next/image";

export default function About() {
    return (
        <section id={headerItems.about.page}
            className="flex flex-col text-center justify-center items-center md:flex-row md:text-start"
        >
            <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className="text-6xl my-6">About</h1>
                <h2 className="my-4 text-3xl">Get to know me
                </h2>
                <p className="[&>p]:mt-5"
                    dangerouslySetInnerHTML={{ __html: userinfo.about }} />
            </div>

            <div className="flex flex-col ml-16 justify-center items-center text-center">
                <div><Image
                    src="/shah.jpeg"
                    alt="dp"
                    width={300}
                    height={200}
                    className="mt-10 mb-3"
                /></div>
                
                <div className="w-3/4 break-words">
                {userinfo.skills.map(skill => (
                    <span className="bg-gray-200 m-1 p-2 text-sm inline-block rounded-md">{skill}</span>
                ))
                }
            </div>

            </div>

           
        </section>
    );
}
