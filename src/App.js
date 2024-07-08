import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RenderRoutes } from "./routes/RenderRoutes";
import Routes from './routes/Routes'

function App() {
  console.log("RoutesPP====>", Routes)
  return (
    <Router>
          <RenderRoutes routes={Routes} />
    </Router>
  );
}

export default App;
