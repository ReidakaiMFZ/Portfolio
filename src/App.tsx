import Header from "./components/Header";
import InitialPage from "./components/InitialPage";
import ProjectList from "./api/Projects";
import Experience from "./components/Experience";


export default function App() {
    return (
        <div className="flex flex-col">
            <Header/>
            <div className="">
                <InitialPage/>
                <Experience/>
                {/* <ProjectList/> */}
            </div>
        </div>
    );
}