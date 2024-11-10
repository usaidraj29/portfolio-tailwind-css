import { headerItems, userinfo } from "@/constant/constant";
import Image from "next/image";
import { projects } from "@/constant/constant";

export default function Projects() {
    return (
        <section id={headerItems.project.page}
            className="flex flex-col text-center justify-center items-center my-40"
        >
                <h1 className="text-6xl my-6">Projects</h1>
                
                <div className="flex ml-16 justify-center items-center text-center break-words flex-wrap">
                
                
                {Object.keys(projects).map(project => (
        <div key={project} className="mt-4 p-2 text-center">
            <Image 
                src={projects[project as keyof typeof projects].image}
                alt=""
                width={300}
                height={300}
                className="mb-2 rounded-3xl"
            />
            <p>{projects[project as keyof typeof projects].name}</p>
        </div>
    ))}
            
            

            </div>

           
        </section>



    );
}
