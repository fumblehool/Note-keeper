import React, { Component } from 'react';

class Sidebar extends Component{
  render() {
    return(
      <div>
        <div className="sidebar-header b-red">
          <div>
            <h3>
              stars
            </h3>
          </div>
          <div className="sidebar-header-control">
            <button className="sidebar-header-control-btn">
              <i className="fa fa-refresh"></i>
            </button>
          </div>
        </div>

        <ul className="sidebar-options b-white">
          <li> <i className="fa fa-inbox m-right"></i>All Stars</li>
          <li> <i className="fa fa-star-o m-right"></i>Untagged Stars</li>
        </ul>

        <div className="sidebar-tags-header b-blue">
          <h3 className="sidebar-tags-header-text">Tags</h3>
          <div className="sidebar-tags-header-options b-red">
            <div><i className="fa fa-plus-circle m-right"></i>Add</div>
            <div><i className="fa fa-sort m-right"></i>Sort</div>
          </div>     
        </div>  


        <form className="tags-form">
          <input className="tags-form-input" placeholder="Tag name" type="text"/>
          <button>Save</button>
        </form>


        <ul className="sidebar-list">
          <li className="sidebar-item">
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li>
          <li className="sidebar-item">
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li><li className="sidebar-item">
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li><li className="sidebar-item">
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li><li className="sidebar-item">
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li><li className="sidebar-item">
            <div>
              <i className="fa fa-tag m-right"></i>
              <span>Item1</span>
            </div>
            <span className="tags-count">2</span>
          </li>
        </ul>

        
        
      </div>  
    );
  }
}

export default Sidebar;
