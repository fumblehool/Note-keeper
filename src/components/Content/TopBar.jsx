import React, { Component } from 'react';
import classNames from 'classnames';

class TopBar extends Component {
  resetStatus = () => {
    this.props.resetStatus();
  };

  render() {
    return (
      <div className="section-topbar">
        <div className="edit">
          <div>
            <button onClick={this.props.handleTagsClick} 
              className={classNames({'btn-focused': this.props.showTagsInput}, 'repo-action')}>
              <i className="fa fa-tag m-right"></i>
              Edit tags
            </button>
          </div>
          <div>
          <button className="repo-action" onClick={this.props.handleNotesClick}>
            <i className="fa fa-sticky-note m-right"></i>
            {(()=>{
                if (this.props.editMode){
                  return(
                    <span>Read Me</span>
                  );
                }
                return(
                  <span>Notes</span>
                );
              })()}
          </button>
          </div>
        </div>
        <div className="status">
          {(() => {
            if (this.props.status === 'Saved') {
              this.resetStatus();
              return (
                <span>
                  Saved
                </span>
              );
            }
          })()}
        </div>

        <div className="clone-repo">
          <label>
            Clone: 
          </label>  
          <input className="clone-repo-input" disabled placeholder={this.props.repoDetails.get('clone_url')}/>
        </div>  
      </div>
    );
  }
}

export default TopBar;
