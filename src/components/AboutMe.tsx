import myphoto from '../assets/myphoto.jpg';
export default function AboutMe(){
    return(
        <div className="flex flex-row py-20 bg-slate-900 items-center justify-evenly max-sm:flex-col max-sm:py-10 max-sm:gap-y-10" id="About">
            <div className="w-64 max-sm:w-32">
                <img src={myphoto} alt="my photo" className="object-fit rounded-sm"/>
            </div>
            <div className="flex flex-col w-2/5 gap-y-5 text-white max-sm:w-4/5">
                <h1 className="font-bold text-3xl w-fit border-b-2 border-[#FF4500] max-sm:text-2xl">About Me</h1>

                <p className="text-lg flex-wrap text-justify leading-none max-sm:text-md">I'm an 18-year-old Brazilian programmer from São Paulo, passionate about technology. Despite my initial shyness, I am an extroverted individual when discussing topics I'm passionate about. I'm excited to start studying at Mackenzie Presbyterian University in 2023 and constantly seek opportunities to expand my programming skills. I believe in the transformative power of technology and aim to develop innovative solutions to real-world challenges. Collaboration and effective communication are important to me, and I'm open to new connections and opportunities.</p>
            </div>
        </div>
    );
}


