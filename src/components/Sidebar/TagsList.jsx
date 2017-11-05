import React, { Component } from 'react';


class TagsList extends Component{

  onTagClick = (tagName) => {
    this.props.handleTagClick(tagName);
  };

  render() {
    return (
      <ul className="sidebar-list">
        {(()=>{
          if (this.props.tagsList && this.props.tagsList.get('tags').size) {
            return this.props.tagsList.get('tags').map((tag, index)=>{
              const tagName = tag.get('name');
              let style = 'sidebar-item';
              if (tagName === this.props.selectedTag) {
                style = style + ' tag-focused'
              }

              return(
                <li className={style } key={index} onClick={this.onTagClick.bind(this, tagName)}>
                  <div>
                    <i className="fa fa-tag m-right"></i>
                    <span>{tag.get('name')}</span>
                  </div>
                  <span className="tags-count">{tag.get('count')}</span>
                </li>
              );
            })
          }
        })()}
      </ul>
    );
  }
}

export default TagsList;
