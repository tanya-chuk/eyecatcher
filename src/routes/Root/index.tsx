import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";
import Gallery from "../Gallery";
import GeneratePattern from "../GeneratePattern";
import Home from "../Home";

const Root: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={GeneratePattern} />
      <Route path="/gallery" component={Gallery}/>
    </Switch>
  );
};

export default Root;
