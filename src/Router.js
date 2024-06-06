import React from 'react'
import { useRoutes } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Pages/AboutUs/AboutUs";
import Mission from "./Pages/Mission/Mission";
import Course from "./Pages/Courses/Courses";
import Sponsors from "./Pages/SponsorPage/SponsorPage"
import Synopses from "./Components/Synopses/Synopses"
import Application from "./Pages/Application/Application"

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
          path: "/application",
          element: <Application/>,
        },
        {
          path: "/courses",
          element: <Course />,
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
