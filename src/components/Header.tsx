import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="grid grid-flow-col items-center  w-screen h-24  bg-slate-900 pl-96">
            <Link to={"/"}><span className="text-white ">Home</span></Link>
            <Link to={"/about"}><span className="text-white ">About Me</span></Link>
            <Link to={"/projects"}><span className="text-white ">Projects</span></Link>
            <a href="https://github.com/ReidakaiMFZ" className="text-white ">Github</a>
        </div>
    );
}