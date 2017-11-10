import React, { Component } from 'react';
import SideContent from '../../components/Content/SideContent';
import MainContent from '../../components/Content/MainContent';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions';

class Content extends Component {

  state = {
    'repoDetails': new Map()
  };

  componentWillMount(){
    if(!this.props.repos.get('isFetchedOnce')){
      this.props.actions.refreshRepoList();
    } 
  }

  componentDidMount() {
    if (this.props.history.location.search){
      let tagName = this.props.history.location.search.split('=')[1];
      this.props.actions.fetchRepoList(tagName);
    }
  }

  handleRepoClick = (repoId) => {
    this.props.actions.fetchRepoDetails(repoId);
  };

  handleSaveTags = (tagsToBeSaved, tags, repoId) => {
    this.props.actions.saveTags(tagsToBeSaved, tags, repoId);
    this.props.actions.fetchTagsList();
  };

  render() {
    return (
      <div className=" content b-black">
        <SideContent
          repoList={this.props.repos}
          onRepoClick={this.handleRepoClick}
          history={this.props.history}
        />
        <MainContent
          repoDetails={this.props.repos.get('repoDetails')}
          actions={this.props.actions}
          handleSaveTags={this.handleSaveTags}
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

export default connect(mapStatesToProps, mapDispatchToProps)(Content);
