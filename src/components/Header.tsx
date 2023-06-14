export default function Header(): JSX.Element {
    return (
        <div className="grid grid-flow-col justify-around items-center w-screen h-24 bg-slate-800 fixed" id="Header">
            <a href="/#Home"><span className="text-white ">Home</span></a>
            <a href="/#About"><span className="text-white ">About Me</span></a>
            <a href="/#Education" className="text-white ">Education</a>
            <a href="/#Projects"><span className="text-white ">Projects</span></a>
        </div>
    );
}