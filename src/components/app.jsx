import React from 'react';

// import Users from '../containers/Users';
import './../sass/app.scss';
import Base from './Layout/Base';
import NotFound from './Layout/NotFound';
// react-router
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Switch>
          <Redirect exact from="/" to="/dashboard" /> 
            <Route path="/dashboard" component={Base} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
