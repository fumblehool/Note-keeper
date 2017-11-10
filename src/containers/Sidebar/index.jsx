import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Logo from '../../components/Logo/Logo';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions/index';

class SidebarContainer extends Component {
  componentDidMount() {
    this.props.actions.refreshRepoList();
    this.props.actions.fetchTagsList();
  };


  render() {
    return (
      <div className=" sidebar">
      <Logo />
      <Sidebar
        actions={this.props.actions}
        tags={this.props.repos.get('tags') || new Map([])}
        history={this.props.history}
      />
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
    repos: state.repos,
  };
}


export default connect(mapStatesToProps, mapDispatchToProps)(SidebarContainer);
