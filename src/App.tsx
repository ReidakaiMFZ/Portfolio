import Header from "./components/Header";
import InitialPage from "./components/InitialPage";
import ProjectList from "./api/Projects";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";

export default function App() {
    return (
        <div className="flex flex-col">
            <Header/>
            <InitialPage/>
            <AboutMe/>
            <Experience/>
            <ProjectList/>
            <span className="bg-slate-800 flex justify-center font-extralight text-white">© 2023, Build with ❤️ by Richard Sanches</span>
        </div>
    );
}