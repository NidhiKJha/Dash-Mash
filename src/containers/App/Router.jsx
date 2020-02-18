import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/index";
import MainWrapper from "./MainWrapper";

import LogIn from "../LogIn/index";
import Registration from "../RegistrationForm/index";
import ExamplePageOne from "../Example/index";
import ExamplePageTwo from "../ExampleTwo/index";
import ExamplePageThree from "../ExampleThree/index";
import ExamplePageFour from "../ExampleFour/index";

const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
    <Route path="/pages/three" component={ExamplePageThree} />
    <Route path="/pages/four" component={ExamplePageFour} />
  </Switch>
);

const NewRoute = () => {
  return (
    <Switch>
      <Registration />
    </Switch>
  );
};

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/Registration" component={Registration} />
        <Route path="/" component={wrappedRoutes} />
        <Route exact path="/R" component={NewRoute} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
