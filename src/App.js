import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Page1, Page2, Page3, Page4 } from './pages'
import './App.css';

const App = () => {
  return (
    <Router>
        <Switch>
          <Route path="/1">
            <Page1 />
          </Route>
          <Route path="/2">
            <Page2 />
          </Route>
          <Route path="/3">
            <Page3 />
          </Route>
          <Route paht="/4">
            <Page4 />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
