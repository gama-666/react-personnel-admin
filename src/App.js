import React, { Component, Fragment } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

import './styles/main.scss';
import Home from './views/Home';
import About from './views/About';
import News from './views/News';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={About} path="/about" />
            <Route component={News} path="/news" />
          </Switch>
        </HashRouter>
      </Fragment>
    )
  }
}


export default App;
