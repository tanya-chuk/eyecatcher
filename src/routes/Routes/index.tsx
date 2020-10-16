import React from "react";
import { Switch, Route } from "react-router-dom";
import Gallery from "../Gallery";
import GeneratePattern from "../GeneratePattern";

const Routes = () => {
  return (
    <Switch>
      <Route path="/create" component={GeneratePattern} />
      <Route path="/gallery" component={Gallery}/>
    </Switch>
  );
}

export default Routes;