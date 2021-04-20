import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Jailbreak from "./pages/jailbreak";
import CheatManager from "./pages/cheatmanager";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/CheatManager" component={CheatManager} />
        <Route path="/Jailbreak" component={Jailbreak} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
