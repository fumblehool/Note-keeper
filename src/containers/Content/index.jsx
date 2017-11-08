import React, { Component } from 'react';
import SideContent from '../../components/Content/SideContent';
import MainContent from '../../components/Content/MainContent';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions';

class Content extends Component {

  handleRepoClick = (repoId) => {
    this.props.actions.fetchRepo(repoId);
  };

  componentWillMount(){
    if (this.props.history.location.search){
      let tagName = this.props.history.location.search.split('=')[1];
      this.props.actions.fetchRepoList(tagName);
    }
  }

  render() {
    return (
      <div className=" content b-black">
        <SideContent
          repoList={this.props.repos}
          onRepoClick={this.handleRepoClick}
          history={this.props.history}
        />
        <MainContent
          repoDetails={this.props.repoDetails}
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
    repoDetails: state.repoDetails,
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(Content);
