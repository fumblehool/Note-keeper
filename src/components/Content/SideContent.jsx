import React, { Component } from 'react';

class SideContent extends Component{

  onRepoClick = (repoId) => {
    this.props.onRepoClick(repoId);
  };

  render() {
    return(
      <div className="content-sidebar">
        <ul className="content-sidebar-repos">
          {(()=>{
            if (this.props.repoList && this.props.repoList.get('reposList').size) {
              return this.props.repoList.get('reposList').map((repo, index) => {
                return(
                  <li className="content-sidebar-li" key={index}
                    onClick={this.onRepoClick.bind(this, repo.get('id'))}>
                    <h3 className="content-sidebar-li-h3">
                      {repo.get('owner')}/{repo.get('name')}
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
                      {repo.get('stars')}
                    </div>
                    <div className="forks">
                      <i className="fa fa-code-fork m-right"></i>
                      {repo.get('forks')}
                    </div>
                    <div className="link">
                      <a href={repo.get('link')}>
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </li>
                );
              })
            }
          })()}
        </ul>  
      </div>
    );
  }
}

export default SideContent;
