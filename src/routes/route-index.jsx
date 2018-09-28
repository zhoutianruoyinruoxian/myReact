import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import App from '../App';

import Home from 'pages/Home/Home';
import Resume from 'pages/Resume/Resume';
import Login from 'pages/User/Login';
import Test from 'pages/Test';

export default (store) => {
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/my" component={Resume} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/test" component={Test} />
          {/* <Route exact path="/" render={() => (<div>home</div>)} />
          <Route exact path="/my" render={(e) => {console.log(e);return(<div>my</div>)}}  /> */}
        </Switch>
      </App>
    </Router>
  );
}

