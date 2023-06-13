import SetIcons from "./SetIcons";

export default function Experience() {
    return(
        <div className="flex flex-col h-screen items-center bg-slate-900 gap-10" id="Skills">
            <div className="flex flex-row gap-72 h-36 border-b-2 border-white w-2/3 justify-center pt-10">
                <h1 className="text-2xl text-center text-white border-b-2 border-white w-fit h-fit font-bold">EDUCATION</h1>
                <div className="flex flex-col">
                    <p className="text-md font-bold text-white">Bachelor in Computer Science</p>
                    <span className="flex flex-row">
                        <p className="text-md text-white italic">Presbiterian University Mackenzie</p>
                        <p className="text-white mx-1 "> • </p>
                        <p className="text-white font-thin">2023 - ?</p>
                    </span>
                </div>
            </div>
            <div className="flex flex-row gap-72 h-1/2 border-b-2 border-white w-2/3 justify-center">
                <h1 className="text-2xl text-center text-white border-b-2 border-white w-fit h-fit font-bold">SKILLS</h1>    
                <SetIcons/>
            </div>
        </div>
    );
}