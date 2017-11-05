import React, { Component } from 'react';
import TopBar from './TopBar';


class MainContent extends Component{

  state = {
    'editMode': false
  };

  handleNotesClick = () => {
    this.setState({
      'editMode': !this.state.editMode
    })
  };

  handleTagsClick = () => {
    console.log(this.props.repoDetails.get('tags'));
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
        No Repo Selected.
      </div>  
    );
  }
}

export default MainContent;
