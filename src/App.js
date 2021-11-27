import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Login from './views/Login';
import { Provider } from "./context";

function App() {

  const [isAuth, setIsAuth] = useState(true)

  if (!isAuth)
    return (
      <Provider>
        <Login />
      </Provider>)

  return (
    <Provider>
      <Router basename={process.env.REACT_APP_BASENAME || ""}>
        <div>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={withTracker(props => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                })}
              />
            );
          })}
        </div>
      </Router>
    </Provider>
  )
}

export default App;


// export default () => (

// );
