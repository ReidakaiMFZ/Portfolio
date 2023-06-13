import {cloneElement} from "react";
import { DiReact, DiJavascript1, DiGit } from "react-icons/di";
import { FaPhp } from "react-icons/fa";
// import { IconContext } from "react-icons/lib";

interface IconsFactoryProps {
    name: string;
    icon: JSX.Element;
}
function IconsFactory(props: IconsFactoryProps) {
    const icon = cloneElement(props.icon, {
        className: "w-10 h-10"
    });
    return(
        <div className="flex flex-col justify-center items-center bg-white w-[5rem] h-[5rem] rounded-lg">
            {icon}
            <p className="text-md font-bold text-black">{props.name}</p>
        </div>
    ); 
}

export default function SetIcons(){
    return (
        <div className="grid grid-flow-row grid-cols-4 gap-6 ">
            {/* <IconContext.Provider value={{color: "yellow"}}> </IconContext.Provider> */}
                <IconsFactory name="React" icon={<DiReact/>}/>
                <IconsFactory name="PHP" icon={<FaPhp/>}/>
                <IconsFactory name="Javascript" icon={<DiJavascript1/>}/>
                <IconsFactory name="Git" icon={<DiGit/>}/>
        </div>
    )
}