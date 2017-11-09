import React, { Component } from 'react';
import TopBar from './TopBar';
import NotesEditor from './Editor';
import TagsInputField from './TagsInputField';

class MainContent extends Component{

  state = {
    'editMode': false,
    'status': '',
    'showTagsInput': false
  };

  componentWillReceiveProps(nextProps) {
    if(this.props.repoDetails !== nextProps.repoDetails){
      this.setState({
        'editMode': false,
        'showTagsInput': false,
      });
    }
  }

  handleNotesClick = () => {
    this.setState({
      'editMode': !this.state.editMode,
      'showTagsInput': false,
    })
  };

  handleTagsClick = () => {
    this.setState({
      'showTagsInput': !this.state.showTagsInput
    });
  };

  resetStatus = () => {
    this.setState({
      'status': ''
    });
  };

  saveText = (text) => {
    this.props.actions.saveText(text, this.props.repoDetails.get('id'));
    this.setState({
      'status': 'Saved'
    });
    setTimeout(this.resetStatus, 2000);
  };

  saveTags = (tags) => {

    this.props.actions.saveTags(tags, this.props.repoDetails.get('id'));
    this.setState({
      'status': 'Saved'
    });
    setTimeout(this.resetStatus, 2000);
  }


  render() {
    // To do - add condition to check instead of checking readMe.
    if (this.props.repoDetails.get('readMe')) {
      return(
        <div className="section">
          <TopBar
            handleNotesClick={this.handleNotesClick}
            handleTagsClick={this.handleTagsClick}
            editMode={this.state.editMode}
            showTagsInput={this.state.showTagsInput}
            status={this.state.status}
          />
          {(()=>{
            if (this.state.showTagsInput) {
              return ([
                <TagsInputField
                  repoDetails={this.props.repoDetails}
                  saveTags={this.saveTags}
                  key="tagsInputField"
                />
              ]);
            }
          })()}
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
