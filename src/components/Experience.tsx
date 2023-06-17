import SetIcons from "./SetIcons";

export default function Experience() {
    return(
        <div className="flex flex-col h-screen items-center bg-white gap-y-10" id="Education">
            
            <div className="flex flex-row h-60 border-b-2 border-black w-2/3 justify-around gap-x-16 pt-10 mt-16 max-sm:w-3/4 max-sm:flex-col max-sm:mt-0">
                
                <h1 className="text-2xl text-center text-black border-b-2 border-[#FF4500] w-fit h-fit font-bold">Education</h1>
                
                <div className="flex flex-col gap-y-5 max-sm:gap-y-3">
                    <div className="flex flex-col">
                        <p className="text-md font-bold text-black">Bachelor in Computer Science</p>
                        <span className="flex flex-row">
                            <p className="text-md text-black italic">Presbiterian University Mackenzie</p>
                            <p className="text-black mx-1 "> • </p>
                            <p className="text-black font-light">2023 - ?</p>
                        </span>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-md font-bold text-black">Technician at Systems Analyst and Development</p>
                        <span className="flex flex-row">
                            <p className="text-md text-black italic">ETEC Jaraguá</p>
                            <p className="text-black mx-1 "> • </p>
                            <p className="text-black font-light">2020 - 2023</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row border-b-2 border-black w-2/3 justify-around max-sm:w-3/4 max-sm:flex-col pb-7">
                <h1 className="text-2xl text-center text-black border-b-2 border-[#FF4500] w-fit h-fit font-bold max-sm:mb-5">Skills</h1>    
                <SetIcons/>
            </div>
        </div>
    );
}