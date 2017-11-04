import React, { Component } from 'react';



class Header extends Component{
  render () {
    return(
      <div className="header">
        <div className="header-search">
          
          <h2>All Stars</h2>
          
          <div className="header-settings">
            <i className="fa fa-cog m-right"></i>
          </div>
          

          <div className="header-form">
            <label>
              <span className="input-group-addon">
                <i className="fa fa-search"></i>
              </span>  
              <input type="text" placeholder="search"/>
              
            </label>
          </div> 
          
          
        </div>

        <div className="header-status">
            Status
          </div>  


        <div className="header-user">
          <img src="https://avatars0.githubusercontent.com/u/8335453?v=4" className="user-avatar"/>
          <span className="username m-right">Damanpreet Singh</span>
          <i className="fa fa-chevron-down"></i>
        </div>
      </div>
    );
  }
}

export default Header;
