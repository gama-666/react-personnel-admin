import React, { Component, Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
//css
import './styles/main.scss';
//组件
import Login from './views/login';
import Index from './views/index';
//组件 路由私有化
import PrivateRoute from "./components/privateRoute"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact component={Login} path="/" />
            <PrivateRoute component={Index} path="/index" />
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}


export default App;
