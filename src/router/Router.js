import React from "react";
import {BrowserRouter as Routing, Route, Switch} from "react-router-dom";
//Pages

//Pomponents

import Home from "../pages/Home";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

function Router() {
  return (
    <Routing>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Routing>
  );
}

export default Router;
