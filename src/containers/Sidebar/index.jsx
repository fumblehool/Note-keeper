import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Logo from '../../components/Logo/Logo';

class SidebarContainer extends Component {
  render() {
    return (
      <div className=" sidebar">
      <Logo />
      <Sidebar />
      </div>
    );
  }
}

export default SidebarContainer;
