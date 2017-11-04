import React, { PureComponent } from 'react';
// import Users from './../../containers/Users';
import HeaderContainer from './../../containers/Header';
import SidebarContainer from './../../containers/Sidebar';
import Content from './../../containers/Content';
// import Footer from './Footer';

class Base extends PureComponent {
  render () {
    return (
      <div className="wrapper">
        <SidebarContainer />
        <div className="main-content b-blue">
          <HeaderContainer />
          <Content />
        </div>
      </div>
    );
  }
}

export default Base;
