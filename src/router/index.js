import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from '../views/index';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Index} />  
    </Router>
  );
}

export default AppRouter;
