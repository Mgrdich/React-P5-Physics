import React, { Component } from "react";
//import NavBarS from "./Component/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Component/Home";
import Data from "./Component/Data";
import Simulations1 from "./Component/Simulations1";
import NotFound from "./Component/NotFound";
import Simulations2 from "./Component/Simulations2";
import BNavBar from "./Component/BNavbar";
import Simulations from "./Component/Simulations";
import Simulations3 from "./Component/Simulations3";
import Simulations4 from "./Component/Simulations4";
import Footer from "./Component/Footer";
class App extends Component {
  render() {
    return (
      <div className="fontifyr">
        <BNavBar />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Data" component={Data} />
          <Route path="/Simulations" exact component={Simulations} />
          <Route path="/Simulations/Sim3" component={Simulations3} />
          <Route path="/Simulations/Sim1" component={Simulations1} />
          <Route path="/Simulations/Sim2" component={Simulations2} />
          <Route path="/Simulations/Sim4" component={Simulations4} />
          <Route path="/notFound" component={NotFound} />
          <Redirect exact from="/" to="/Home" />
          <Redirect to="/notFound" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
