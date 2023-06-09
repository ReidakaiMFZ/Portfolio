import React, { useState } from "react";
import Header from "./components/Header";
import InitialPage from "./components/InitialPage";
import About from "./components/About";
import ProjectList from "./api/Projects";


export default function App() {
    return (
        <div className="flex flex-col">
            <Header/>
            <div className="mt-24">
                <InitialPage/>
                <About/>
                <ProjectList/>
            </div>
        </div>
    );
}