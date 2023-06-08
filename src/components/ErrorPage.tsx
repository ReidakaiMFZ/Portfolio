import { Link } from "react-router-dom";

export default function ErrorPage(){
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-300 ">
            <h1 className="text-9xl">404</h1>
            <h1 className="text-2xl">Page not found</h1>
            <Link to={"/"} className='bg-slate-500 rounded-md border-solid border-1 p-4 border-black mt-16 '>
                Back to home
            </Link>
        </div>
    );
}