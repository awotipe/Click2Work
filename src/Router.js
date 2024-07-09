import React from 'react'
import { useRoutes } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/AboutUs";
import Mission from "./Pages/Mission/Mission";
import Course from "./Pages/Courses/Courses";
import Gallery from "./Pages/Gallery/Gallery";
import Sponsors from "./Pages/SponsorPage/SponsorPage";
import Synopses from "./Components/Synopses/Synopses";
import Register from "./Pages/Application/Application";

const Router = () => {
    return useRoutes([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/mission",
          element: <Mission />,
        },
        {
          path: "/register",
          element: <Register/>,
        },
        {
          path: "/courses",
          element: <Course />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/synopses",
          element: <Synopses />,
        },
        {
          path: "/sponsors",
          element: <Sponsors />,
        },
      ]
      )
}

export default Router
