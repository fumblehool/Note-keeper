import React, { PureComponent } from 'react';
// import Users from './../../containers/Users';
import HeaderContainer from './../../containers/Header';
import SidebarContainer from './../../containers/Sidebar';
import Content from './../../containers/Content';
// import Footer from './Footer';

class Base extends PureComponent {

  componentDidMount() {
    if(!this.props.history.location.search){
      this.props.history.push(`?tag=allStars`);
    }
  };

  render() {
    return (
      <div className="wrapper">
        <SidebarContainer history={this.props.history} />
        <div className="main-content">
          <HeaderContainer history={this.props.history} />
          <Content history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default Base;
