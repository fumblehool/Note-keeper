import React from 'react';

// import Users from '../containers/Users';
import './../sass/app.scss';
import Base from './Layout/Base';
import NotFound from './Layout/NotFound';
// react-router
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// js-cookie
import { getCookie } from '../utils/CookieEditor';

class App extends React.Component {
  render() {
    if( getCookie('token') ){
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
    return (
      <div>
        <div>
        <h1> Please Login </h1>
        </div>
        <div><a href='http://dev.note-keeper.com:5000/login'>Log In</a></div>
      </div>  
    );
  }
}

export default App;
