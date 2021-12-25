import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import NewTeam from "./teams/pages/NewTeam";
//react-router-dom is react package that import mutltiple things we can use

import Users from "./user/pages/Users";


const App = () => {
  //We wrap everything in the <Router> on everything that need to use our router
  return (
      //The exact in the Route path make sure that we don't need to go back to any other Path beside Users
    <Router>
        <Switch>
      <Route path="/" exact> 
        <Users />
      </Route>
      <Route path="/teams/new" exact>
          <NewTeam />
      </Route>
      <Redirect to="/" />
      </Switch>
    </Router>
    //The switch case make sure that we don't execute all route function if we can find a working route
    //The  Redirect with to make sure that if we are not redirecting to anything that is not a valid path it will come back to Users
  );
};

export default App;
