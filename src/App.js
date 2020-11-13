import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeddingCard from './WeddingCard';

export default function App() {
  return (
    <Router basename="/wedding-card/">
      <Switch>
        <Route path="/invitacion">
          <WeddingCard invitation />
        </Route>
        <Route path="/participacion">
          <WeddingCard />
        </Route>
      </Switch>
    </Router>
  );
}
