import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import curriculum from "../assets/Curriculum.pdf";
export default function InitialPage() {
    return(
        <div className="flex flex-col h-screen items-center justify-center" id="Home">
            <h1 className="text-5xl font-bold">Hi, I am Richard Sanches</h1>
            <h2 className="text-xl mt-1">I am a computer science student</h2>

            <div className="flex flex-row mt-3 gap-x-2">
                <a href="https://github.com/reidakaimfz" className=""><FaGithub className="h-16 w-16"/></a>
                <a href="https://www.linkedin.com/in/richard-sanches-325237227"><FaLinkedin className="h-16 w-16"/></a>
                <a href="mailto:richardbsanches@outlook.com">
                    <MdEmail className="w-16 h-16"/>
                </a>
                <a className="flex h-16 w-48 items-center justify-center bg-green-500 rounded-full ml-2" download={true} href={curriculum}>
                    <FaFileDownload className="h-16"/>
                    <p className="ml-2 text-md">Curriculum</p>
                </a>
            </div>
        </div>
        
    );
}