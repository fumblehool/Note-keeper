import React, { Component } from 'react';

class MainContent extends Component{

  handleNotesClick = () => {
    alert(this.props.repoDetails.get('note'));
  };

  handleTagsClick = () => {
    alert(this.props.repoDetails.get('tags'));
  };

  render() {
    if (this.props.repoDetails.get('readMe')) {
      return(
        <div className="section">
      	<div className="section-topbar">
        	<div className="edit">	
            <div>
        		  <button onClick={this.handleTagsClick} 
                className="repo-action">
                <i className="fa fa-tag m-right"></i>
                Edit tags
              </button>
            </div>
            <div>
        		<button className="repo-action" onClick={this.handleNotesClick}>
              <i className="fa fa-sticky-note m-right"></i>
              Notes
            </button>
            </div>
          </div>

          <div className="clone-repo">
            <label>
              Clone: 
            </label>  
      		  <input className="clone-repo-input" disabled placeholder="git@github.com:GoogleChrome/samples.git"/>
          </div>  
      	</div>
        
        <div className="repo-readme">
          {this.props.repoDetails.get('readMe')}
        </div>
      </div>
      );
    }
    return(
      <div className="section">
        No Repo Selected.
      </div>  
    );
  }
}

export default MainContent;
