import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/home";
import 'react-languages-select/css/react-languages-select.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
