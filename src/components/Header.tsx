export default function Header(): JSX.Element {
    // if(720 < window.innerWidth){
        return (
            <div className="grid grid-flow-col justify-around items-center w-screen h-24 bg-slate-800 fixed" id="Header">
                <a href="/#Home"><span className="text-white ">Home</span></a>
                <a href="/#About"><span className="text-white ">About Me</span></a>
                <a href="/#Education" className="text-white ">Education</a>
                <a href="/#Projects"><span className="text-white ">Projects</span></a>
            </div>
        );
    // }
    // else{
    //     return(
    //         <div>
    //             <button aria-label="Menu Button" className="fixed top-2 right-2 z-40 rounded-md bg-orange-500 p-2 ring-offset-gray-800/60 hover:bg-orange-400 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 sm:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path></svg><span className="sr-only">Open sidebar</span></button>
    //         </div>
    //     );
    // }
}