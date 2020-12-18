import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "../src/Components/Form";
import Home from "../src/Pages/Home";
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/Form">
          <Form />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
