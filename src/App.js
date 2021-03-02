import React, { Component, Fragment } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

import './styles/main.scss';
import Login from './views/login';

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
            <Route component={Login} exact path="/" />
          </Switch>
        </HashRouter>
      </Fragment>
    )
  }
}


export default App;
