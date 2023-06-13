import { useEffect, useState } from "react";

export default function Header(): JSX.Element {
    return (
        <div className="grid grid-flow-col justify-around items-center w-screen h-24 bg-[#333333] fixed" id="Header">
            <a href="/#Home"><span className="text-white ">Home</span></a>
            <a href="/#About"><span className="text-white ">About Me</span></a>
            <a href="/#Projects"><span className="text-white ">Projects</span></a>
            <a href="https://github.com/ReidakaiMFZ" className="text-white ">Github</a>
        </div>
    );
}