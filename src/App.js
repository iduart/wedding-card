import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import WeddingCard from './WeddingCard';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/invitacion">
          <WeddingCard invitation />
        </Route>
        <Route exact path="/participacion">
          <WeddingCard />
        </Route>
      </Switch>
    </Router>
  );
}
