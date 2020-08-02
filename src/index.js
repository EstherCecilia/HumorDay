import React from "react";
import ReactDOM from "react-dom";
import App from "./principal";
import Login from "./login";
import Cadaster from "./cadastro";
import Dash from "./dashboard";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Route path="/home" component={App} />
      <Route path="/cadastro" component={Cadaster} />
      <Route path="/dash" component={Dash} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
