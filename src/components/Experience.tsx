import SetIcons from "./SetIcons";

export default function Experience() {
    return(
        <div className="flex flex-col h-screen items-center bg-white gap-y-10" id="Skills">
            <div className="flex flex-row h-36 border-b-2 border-black w-2/3 justify-around gap-x-16 pt-10">
                <h1 className="text-2xl text-center text-black border-b-2 border-[#FF4500] w-fit h-fit font-bold">EDUCATION</h1>
                <div className="flex flex-col">
                    <p className="text-md font-bold text-black">Bachelor in Computer Science</p>
                    <span className="flex flex-row">
                        <p className="text-md text-black italic">Presbiterian University Mackenzie</p>
                        <p className="text-black mx-1 "> • </p>
                        <p className="text-black font-light">2023 - ?</p>
                    </span>
                </div>
            </div>
            <div className="flex flex-row  h-1/2 border-b-2 border-black w-2/3 justify-around">
                <h1 className="text-2xl text-center text-black border-b-2 border-[#FF4500] w-fit h-fit font-bold">SKILLS</h1>    
                <SetIcons/>
            </div>
        </div>
    );
}