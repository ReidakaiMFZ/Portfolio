import myphoto from '../assets/myphoto.jpg';
export default function AboutMe(){
    return(
        <div className="flex flex-row h-screen bg-slate-900 items-center justify-evenly" id="About">
            <div className="w-80">
                <img src={myphoto} alt="my photo" className="object-fit"/>
                
            </div>
            <div className="flex flex-col w-2/5 gap-y-5 text-white">
                <h1 className="font-bold text-3xl w-fit border-b-2 border-[#FF4500]">About Me</h1>

                <p className="text-lg flex-wrap text-justify leading-none">I am an 18-year-old Brazilian programmer with a passion for technology. Despite being naturally shy, I consider myself an extroverted individual when it comes to discussing and working on topics I am passionate about. I'm thrilled to begin my studies at Mackenzie Presbyterian University in the second semester of 2023.</p>
                <p className="text-lg flex-wrap text-justify leading-none">With wisdom in various programming languages, I am constantly seeking opportunities to expand my knowledge and skills. I firmly believe in the transformative power of technology to make a positive impact on people's lives and society as a whole. My goal is to apply the knowledge I gain at university to develop innovative solutions that address real-world challenges.</p>
                <p className="text-lg flex-wrap text-justify leading-none">In addition to my programming abilities, I value collaboration and teamwork. Although I may be initially reserved, my extroverted nature shines through as I engage in discussions and contribute to group projects. I believe that effective communication and a supportive team environment are essential for personal and professional growth.</p>
                <p className="text-lg flex-wrap text-justify leading-none">I am open to exploring new connections and opportunities, so please feel free to reach out to me.</p>
            </div>
        </div>
    );
}


