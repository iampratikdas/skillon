import { Route , Routes} from "react-router-dom";
// import RouteWithSubRoutes from "./RouteWithSubRoutes";
import Home from "../components/Home";

// function RouteWithSubRoutes(routes) {
//     console.log("Routessub====>", routes)
//   return (
    
    
//     <Route
//       path={routes.path}
//       exact={routes.exact}
//       render={props => <routes.element {...props} routes={routes.routes} />}
//     />
   
//   );
// }

export function RenderRoutes({ routes }) {
    return (
      <Routes>
        {
            routes.map((route, i) => {
                return (
                    <Route
                    path={route.path}
                    exact={route.exact}
                    element={route.element }
                    />
                )
              })
        }

      </Routes>
    );
  }

