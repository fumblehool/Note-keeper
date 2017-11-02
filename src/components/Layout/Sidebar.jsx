import React, { Component } from 'react';

class Sidebar extends Component{
  render() {
    return(
      <div>
        <div className="sidebar-header b-red">
          <div>
            <h3>
              Header
            </h3>
          </div>
          <div>
            Btn
          </div>
        </div>

        <ul className="sidebar-options b-white">
          <li> All Stars</li>
          <li> Untagged Stars</li>
        </ul>

        <div className="sidebar-tags-header b-blue">
          <div>Tags</div>
          <div className="sidebar-tags-header-mid b-red">
            <div>Add</div>
            <div>Sort</div>
          </div>     
        </div>  

        <div className="sidebar-tags-header">
          <div> SearchBar
          </div>
          <div className="color">
              Submit
          </div>    
        </div>

        <div className="sidebar-item b-white">
          Item1
        </div>
        <div className="sidebar-item b-white">
          Item1
        </div>
        <div className="sidebar-item b-white">
          Item1
        </div>
        <div className="sidebar-item b-white">
          Item1
        </div>
        <div className="sidebar-item b-white">
          Item1
        </div>
        <div className="sidebar-item b-white">
          Item1
        </div>
        <div className="sidebar-item b-white">
          Item1
        </div>
        <div className="sidebar-item b-white">
          Item1
        </div>
        
      </div>  
    );
  }
}

export default Sidebar;
