import React, { Component } from 'react';
import TagsList from './TagsList';
import AddTagForm from './AddTagForm';

class Sidebar extends Component{
  state = {
    'addTagVisibility': false,
    'selectedTag': 'all',
  };

  onRefresh = () => {
    this.props.actions.refreshRepoList();
  };

  onAddTag = () => {
    this.setState({
      'addTagVisibility': !this.state.addTagVisibility
    });
  }

  handleTagClick = (tagName) => {
    this.setState({
      'selectedTag': tagName
    })
    console.log('tag -> ', tagName, 'clicked')
  }

  render() {
    return(
      <div className="sidebar-content">
        <div className="sidebar-header">
          <div>
            <h3>
              stars
            </h3>
          </div>
          <div className="sidebar-header-control">
            <button className="sidebar-header-control-btn" onClick={this.onRefresh}>
              <i className="fa fa-refresh"></i>
            </button>
          </div>
        </div>

        <ul className="sidebar-options">
          <li onClick={this.handleTagClick.bind(this, 'all')}>
            <i className="fa fa-inbox m-right"></i>
            All Stars
          </li>
          <li onClick={this.handleTagClick.bind(this, 'untagged')}>
            <i className="fa fa-star-o m-right"></i>
            Untagged Stars
          </li>
        </ul>

        <div className="sidebar-tags-header b-blue">
          <h3 className="sidebar-tags-header-text">Tags</h3>
          <div className="sidebar-tags-header-options b-red">
            <div onClick={this.onAddTag}><i className="fa fa-plus-circle m-right"></i>Add</div>
            <div><i className="fa fa-sort m-right"></i>Sort</div>
          </div>     
        </div>  

      {(() => {
        if (this.state.addTagVisibility) {
          return (  
            <AddTagForm
              active={this.state.addTagVisibility}
             />
          );
        }
      })()}
      
      <TagsList
        handleTagClick={this.handleTagClick}
        tagsList={this.props.tags}
        selectedTag={this.state.selectedTag}
      />
      
      </div>
    );
  }
}

export default Sidebar;
