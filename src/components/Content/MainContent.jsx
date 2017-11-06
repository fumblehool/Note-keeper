import React, { Component } from 'react';
import TopBar from './TopBar';


class MainContent extends Component{

  state = {
    'editMode': false
  };

  componentWillReceiveProps(nextProps) {
    if(this.props.repoDetails !== nextProps.repoDetails){
      this.setState({
        'editMode': false
      });
    }
  }

  handleNotesClick = () => {
    this.setState({
      'editMode': !this.state.editMode
    })
  };

  handleTagsClick = () => {
  };

  render() {
    // To do - add condition to check instead of checking readMe.
    if (this.props.repoDetails.get('readMe')) {
      return(
        <div className="section">
          <TopBar
            handleNotesClick={this.handleNotesClick}
            handleTagsClick={this.handleTagsClick}
            editMode={this.state.editMode}
          />  
        <div className="repo-readme">
          {(()=>{
            if(!this.state.editMode){
              return(
                <div>{this.props.repoDetails.get('readMe')}</div>
              );
            }
            return(
              <div> Edit Notes.</div>
            );
          })()}

          
        </div>
      </div>
      );
    }

    return(
      <div className="section empty-placeholder">
        <span>
          No Repo Selected.
        </span>
      </div>  
    );
  }
}

export default MainContent;
