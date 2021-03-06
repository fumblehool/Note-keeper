import React, { Component } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
class SideContent extends Component{

  state = {
    'selectedRepoId': ''
  }

  onRepoClick = (repoId, repoName) => {
    this.setState({
      'selectedRepoId': repoId
    });
    this.props.onRepoClick(repoId, repoName);
  };

  render() {
    return(
      <div className="content-sidebar">
        <ul className="content-sidebar-repos">
          {(()=>{
            if (this.props.repoList && this.props.repoList.getIn(['originalReposList', 'reposList']) && this.props.repoList.getIn(['originalReposList', 'reposList']).size) {
              if (this.props.history.location.search) {
                let tagName = this.props.history.location.search.split('=')[1];
                let filteredList = this.props.repoList.getIn(['originalReposList', 'reposList']);
                
                if(tagName === 'untagged'){
                  filteredList = this.props.repoList.getIn(['originalReposList', 'reposList']).filter((repo)=> repo.get('tags').toJSON().length === 0);
                } else if (tagName === 'allStars') {
                  filteredList = this.props.repoList.getIn(['originalReposList', 'reposList']);
                } else {
                  filteredList = this.props.repoList.getIn(['originalReposList', 'reposList']).filter((repo)=> repo.get('tags').toJSON().indexOf(tagName) !== -1);
                }
                if (this.props.searchText) {
                  let self = this;
                  let fL = filteredList;
                  filteredList = fL.filter((repo) => {
                                  if(repo.get('description').toLowerCase().indexOf(this.props.searchText) !== -1 ||
                                    repo.get('full_name').toLowerCase().indexOf(this.props.searchText) !== -1) {
                                    return repo;
                                  }});
                }

                if (filteredList.size) {
                  return filteredList.map((repo, index) => {
                    return(
                      <li className={classNames('content-sidebar-li', {'content-sidebar-li-active': repo.get('id') === this.state.selectedRepoId})} key={index}
                        onClick={this.onRepoClick.bind(this, repo.get('id'), repo.get('full_name'))}>
                        <h3 className="content-sidebar-li-h3">
                          {repo.get('full_name')}
                        </h3> 
                      <div className="content-sidebar-li-description">
                        {repo.get('description')}
                      </div>
                      <ul className="content-sidebar-li-tags">
                        {
                          repo.get('tags').map((tag) => {
                            return(
                              <li key={tag}>{tag}</li>
                            )
                          })
                        }
                      </ul>
                      <div className="content-sidebar-li-repo-stats">
                        <div className="stars">
                          <i className="fa fa-star m-right"></i>
                          {repo.get('stargazers_count')}
                        </div>
                        <div className="forks">
                          <i className="fa fa-code-fork m-right"></i>
                          {repo.get('forks')}
                        </div>
                        <div className="link">
                          <a href={repo.get('html_url')}>
                            View on GitHub
                          </a>
                        </div>
                      </div>
                    </li>
                    );
                  })
                } else{
                  return (
                    <li className="content-sidebar-li danger">
                      No repo here!
                    </li>
                  )
                }
              }
            } else if (this.props.repoList.getIn(['originalReposList', 'isFetchingError'])) {
              return (
                <li className='content-sidebar-li danger'>
                  Fetching Error 
                </li>
              );
            }
          })()}
        </ul>  
      </div>
    );
  }
}

export default SideContent;
