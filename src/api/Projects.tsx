import { ReactElement, useEffect, useState } from "react";
import axios from "axios";

interface ProjectProps {
    name: string;
    description: string;
    language: string;
    id?: number;
}
function Project(props:ProjectProps):ReactElement {
    return (
        <div className="flex flex-col min-w-80 w-96 min-h-40 p-1 m-3 content-between rounded-md bg-white">
            <img src={'https://thumbs.dreamstime.com/b/linhas-de-c%C3%B3digo-objetivas-de-c-59098349.jpg'}  />
            <h1 className="font-bold text-xl mb-2">{props.name}</h1>
            <span className="inline-block text-xs border-[2px] border-green-600 w-fit p-2 rounded-md text-green-600 bg-slate-900">{props.language}</span>
            <p>{props.description}</p>
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
        <div className="flex flex-row flex-wrap bg-white" id="Projects">
            {projects.map((project:ProjectProps) => {
                if (project.name == 'ReidakaiMFZ' ) return;
                return <Project name={project.name} description={project.description} language={project.language} key={project.id} />
            })}
        </div>
    );
}

