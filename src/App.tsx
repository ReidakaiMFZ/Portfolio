import Header from "./components/Header";
import InitialPage from "./components/InitialPage";
import ProjectList from "./api/Projects";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";


export default function App() {
    return (
        <div className="flex flex-col">
            <Header/>
            <div className="">
                <InitialPage/>
                <AboutMe/>
                <Experience/>
                {/* <ProjectList/> */}
            </div>
        </div>
    );
}