import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//react-router-dom is react package that import mutltiple things we can use

import Users from "./user/pages/Users";


const App = () => {
  //We wrap everything in the <Router> on everything that need to use our router
  return (
      //The exact in the Route path make sure that we don't need to go back to any other Path beside Users
    <Router>
      <Route path="/" exact> 
        <Users />
      </Route>
      <Redirect to="/" />
    </Router>
    //The  Redirect with to make sure that if we are not redirecting to anything that is not a valid path it will come back to Users
  );
};

export default App;
