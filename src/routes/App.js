import React from "react";
import {createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider} from 'react-router-dom';

// Style
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from './logo.svg';

// Pages
import RootLayout from '../layouts/RootLayout';
import AboutMe from '../pages/AboutMe';
import Knowledge from "../pages/Knowledge";
import Blog from "../pages/Blog";
import Downlod from "../pages/Downlod";

const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<RootLayout />}>
        <Route index element={<AboutMe />}/>
        <Route path="knowledge" element={<Knowledge />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="download" element={<Downlod />}/>
    </Route>
));

const App = () => {
    return <RouterProvider router={router} />
}

export default App;
