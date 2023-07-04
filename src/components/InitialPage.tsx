import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import curriculum from "../assets/Curriculum.pdf";

export default function InitialPage() {

    return(
        <div className="flex flex-col h-screen items-center justify-center" id="Home">
            <h1 className="text-5xl font-bold max-sm:text-3xl">Hi, I am Richard Sanches</h1>
            <h2 className="text-3xl mt-1 max-sm:text-lg">
                <Typewriter words={["Fullstack Developer", "Computer Science Student", "Junior Developer"]} cursor={true} loop={true}/>
            </h2>

            <div className="flex flex-row mt-3 gap-x-2">
                <a href="https://github.com/Richardsan1" className=""><FaGithub className="h-16 w-16 max-sm:h-12 max-sm:w-12"/></a>
                <a href="https://www.linkedin.com/in/richard-sanches-325237227"><FaLinkedin className="h-16 w-16 max-sm:h-12 max-sm:w-12"/></a>
                <a href="mailto:richardbsanches@outlook.com">
                    <MdEmail className="w-16 h-16 max-sm:h-12 max-sm:w-12"/>
                </a>
                <a className="flex h-16 w-48 items-center justify-center bg-green-500 rounded-full ml-2  max-sm:h-12 max-sm:w-28 hover:bg-green-700" download={true} href={curriculum}>
                    <FaFileDownload className="h-16 max-sm:h-6"/>
                    <p className="ml-2 text-md max-sm:text-sm">Curriculum</p>
                </a>
            </div>
        </div>
        
    );
}