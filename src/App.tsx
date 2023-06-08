import React from "react";
import Header from "./components/Header";
import InitialPage from "./components/InitialPage";
import About from "./components/About";
import ProjectList from "./api/Projects";


export default function App() {
    return (
        <div className="flex flex-col bg-gray-700">
            <Header/>
            <div>
                <InitialPage/>
                <About/>
                <ProjectList/>
            </div>
        </div>
    );
}