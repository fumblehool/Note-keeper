import React from 'react';

import Users from '../containers/Users';
import './../sass/app.scss';
import Base from './Layout/Base';

class App extends React.Component {
  render() {
    return (
      <div>
        <Base/>
        <Users />
      </div>
    );
  }
}

export default App;
