import React from "react";
import Home from '../components/Home'
const Routes = [
  { path: "/",exact: true, element: <Home /> },
  { path: "/about",exact: true, element: <Home /> },
  // {
  //   path: "/app",
  //   key: "APP",
  //   component: () => <h1>App</h1>,
  //   routes: [
  //     {
  //       path: "/app",
  //       key: "APP_ROOT",
  //       exact: true,
  //       component: () => <h1>App Index</h1>,
  //     },
  //     {
  //       path: "/app/page",
  //       key: "APP_PAGE",
  //       exact: true,
  //       component: () => <h1>App Page</h1>,
  //     },
  //   ],
  // },
];

export default Routes;