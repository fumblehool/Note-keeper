import React, { Component } from 'react';
import SideContent from '../../components/Content/SideContent';
import MainContent from '../../components/Content/MainContent';

class Content extends Component {
  render() {
    return (
      <div className=" content b-black">
        <SideContent key="0" />
        <MainContent key="1" />
      </div>
    );
  }
}

export default Content;
