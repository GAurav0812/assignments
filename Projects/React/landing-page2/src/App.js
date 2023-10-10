import React, { Component } from "react";
import routes from "./routes";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

// Import Bootstrap css
import "./theme.scss";

// Import themify Icon
import "./assets/css/themify-icons.css";

// Import Custom Css
import "./assets/css/style.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
    render() {
        return (
          <React.Fragment>
          <Router>
            <Switch>
              {routes.map((route, idx) => (
                <Route path={route.path} component={route.component} key={idx} />
              ))}
            </Switch>
          </Router>
        </React.Fragment>
      );
    }
  }
  
  export default withRouter(App);