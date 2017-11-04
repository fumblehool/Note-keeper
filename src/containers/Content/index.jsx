import React, { Component } from 'react';
import SideContent from '../../components/Content/SideContent';
import MainContent from '../../components/Content/MainContent';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions';

class Content extends Component {
  render() {
    return (
      <div className=" content b-black">
        <SideContent repoList={this.props.repos}/>
        <MainContent />
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

export default connect(mapStatesToProps, mapDispatchToProps)(Content);
