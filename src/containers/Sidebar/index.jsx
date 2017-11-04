import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Logo from '../../components/Logo/Logo';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions/index';

class SidebarContainer extends Component {
  render() {
    return (
      <div className=" sidebar">
      <Logo />
      <Sidebar actions={this.props.actions} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStatesToProps(state) {
  return {
    users: state.users,
  };
}


export default connect(mapStatesToProps, mapDispatchToProps)(SidebarContainer);
