import React, { Component } from 'react';


class TagsList extends Component{

  onTagClick = (e) => {
    this.props.handleTagClick(e);
  };

  render() {
    return (
      <ul className="sidebar-list">
          <li className="sidebar-item" onClick={this.onTagClick}>
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li>
          <li className="sidebar-item" onClick={this.onTagClick}>
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li>
          <li className="sidebar-item" onClick={this.onTagClick}>
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li>
          <li className="sidebar-item" onClick={this.onTagClick}>
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li>
          <li className="sidebar-item" onClick={this.onTagClick}>
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li>
          <li className="sidebar-item" onClick={this.onTagClick}>
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li>
        </ul>
    );
  }
}

export default TagsList;