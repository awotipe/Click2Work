import React from 'react'
import { useRoutes } from "react-router";
import Home from "./Pages/Home/Home";
import About from "./Components/About/About";
import Mission from "./Components/Goals/Goals";
import Course from "./Components/Courses/Courses";
import Sponsors from "./Components/Sponsors/Sponsors"
import Synopses from "./Components/Synopses/Synopses"

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
        // {
        //   path: "/contact",
        //   element: <Contact />,
        // },
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
