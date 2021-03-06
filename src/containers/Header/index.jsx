import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class HeaderContainer extends Component {
  render() {
    return ([
      <Header
        key="0"
        history={this.props.history}
        ref="header"
        handleChange={this.props.handleChange}
        user={this.props.user}
      />,
    ]);
  }
}

export default HeaderContainer;
