import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Start from "./pages/Start";
import Game from "./pages/Game"
import * as serviceWorker from "./serviceWorker";

const routes = (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Start} />
      <Route path="/game" component={Game} />
    </Switch>
  </HashRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
