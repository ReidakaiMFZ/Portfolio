import React, { useState } from "react";
import Header from "./components/Header";
import InitialPage from "./components/InitialPage";
import ProjectList from "./api/Projects";


export default function App() {
    return (
        <div className="flex flex-col">
            <Header/>
            <div className="">
                <InitialPage/>
                <ProjectList/>
            </div>
        </div>
    );
}