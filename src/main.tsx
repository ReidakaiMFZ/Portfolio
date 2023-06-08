import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
// import { createBrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App';
import ErrorPage from './components/ErrorPage';
import About from './components/About';


// const router = createBrowserRouter([
//   {path: '/', element: <App/>},
//   {path: '/:err', element: <ErrorPage/>},
//   {path:'/about', element: <About/>},
// ]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <RouterProvider router={router}/> */}
        <App/>
    </React.StrictMode>,
)