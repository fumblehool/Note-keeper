import React, { Component } from 'react';
import SideContent from '../../components/Content/SideContent';
import MainContent from '../../components/Content/MainContent';


class Content extends Component {

  state = {
    'repoDetails': new Map()
  };

  handleRepoClick = (repoId, repoName) => {
    this.props.actions.fetchRepoDetails(repoId, repoName);
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
          searchText={this.props.searchText}
        />
        <MainContent
          repoDetails={this.props.repos.get('repoDetails')}
          status={this.props.repos.getIn(['saveRepoText', 'status']) || ''}
          actions={this.props.actions}
          handleSaveTags={this.handleSaveTags}
        />
      </div>
    );
  }
}

export default Content;
