import { FaFileDownload } from "react-icons/fa";
export default function InitialPage() {
    return(
        <div className="flex flex-col h-screen items-center justify-center" id="Home">
            <h1 className="text-5xl font-bold">Hi, I am Richard Sanches</h1>
            <h2 className="text-xl mt-1">I am a computer science student</h2>

            <div className="flex flex-row mt-3">
                <a href="https://github.com/reidakaimfz" className="h-[4.2rem] w-[4.2rem]"><img src="./src/assets/github-icon.png" alt="" className="h-fit w-fit"/></a>
                <a href="https://www.linkedin.com/in/richard-sanches-325237227/" className="h-16 w-16"><img src="./src/assets/linkedin-icon.png" alt="" className="h-fit w-fit"/></a>
                <a className="flex h-16 w-48 items-center justify-center bg-green-500 rounded-full ml-2" download={true} href="./src/assets/Curriculum.pdf">
                    <FaFileDownload className="h-16"/>
                    <p className="ml-2 text-md">Curriculum</p>
                </a>
            </div>
        </div>
        
    );
}