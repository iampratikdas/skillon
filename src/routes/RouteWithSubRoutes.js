import React from "react";
import { Route } from "react-router-dom";

export  function RouteWithSubRoutes(route) {
    console.log("Routessub====>", route)
  return (
    
    
    <Route
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
   
  );
}