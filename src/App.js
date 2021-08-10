import React,  { Component } from 'react';
import './App.css';
import Topbar from "./components/topbar/topbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Topbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={Shop}/>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;