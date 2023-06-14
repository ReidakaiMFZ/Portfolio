import { ReactElement, useEffect, useState } from "react";
import axios from "axios";

interface ProjectProps {
    name: string;
    description: string;
    language: string;
    id?: number;
    html_url: string;
}
function Project(props:ProjectProps):ReactElement {
    return (
        <div className="flex flex-col min-w-80 w-96 min-h-40 py-3 px-5 m-1 content-between rounded-md bg-gray-300">
            <h1 className="font-bold text-xl mb-2">{props.name}</h1>
            <div className="flex flex-row gap-x-2">
                <span className="inline-block text-xs w-fit p-2 rounded-md bg-green-500 text-black">{props.language}</span>
                <a href={props.html_url}><span className="inline-block text-xs w-fit p-2 rounded-md text-black bg-green-500 hover:bg-green-700">Read More &gt;</span></a>
            </div>
            <p className="mt-2">{props.description}</p>
        </div>
    )
}

export default function ProjectList():ReactElement {
    const [projects, setProjects] = useState([]) ;
    useEffect(() => {
        axios.get('https://api.github.com/users/reidakaiMFZ/repos').then((res) => {
            setProjects(res.data);
        })
    }, []);

    return (
        <div className="flex flex-col bg-slate-900 justify-center items-center h-screen" id="Projects">
            <h1 className="text-4xl font-bold text-white m-3 border-b-2 border-[#FF4500]">Projects</h1>
            <p className="text-white"> Here are some of my projects that i've been working on</p>
            <div className="flex flex-row  flex-wrap justify-center mt-5">
                {projects.map((project:ProjectProps) => {
                    if (project.name == 'ReidakaiMFZ' ) return;
                    return <Project name={project.name} description={project.description} language={project.language} html_url={project.html_url} key={project.id} />
                })}
            </div>
        </div>
    );
}

