import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Favorite from "./components/Favorite";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/fav"><Favorite/></Route>
          </Switch>
        </Router>
      </>
    )
  }
}
export default App;