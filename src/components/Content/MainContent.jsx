import React, { Component } from 'react';
import TopBar from './TopBar';
import NotesEditor from './Editor';

class MainContent extends Component{

  state = {
    'editMode': false,
    'status': ''
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

  resetStatus = () => {
    this.setState({
      'status': ''
    });
  };

  saveText = (text) => {
    console.log('api call to save text');
    this.setState({
      'status': 'Saved'
    });
    setTimeout(this.resetStatus, 2000);
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
            status={this.state.status}
          />  
        <div className="repo-readme">
          {(()=>{
            if(!this.state.editMode){
              return(
                <div>{this.props.repoDetails.get('readMe')}</div>
              );
            }
            return(
              <NotesEditor 
                notes={this.props.repoDetails.get('notes')}
                saveText={this.saveText}
              />
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
