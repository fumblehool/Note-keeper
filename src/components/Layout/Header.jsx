import React, { Component } from 'react';



class Header extends Component{
  render () {
    return(
      <div className="header b-red">
        <div className="header-item-search b-blue">
          <div>
            <h2>search</h2>
          </div>
          <div>
            <form>
              <input type="text"/>
            </form>
          </div> 
        </div>
        Header
        <div className="header-item-user b-blue">
          <img src="https://avatars0.githubusercontent.com/u/8335453?v=4" className="user-avatar"/>
          <span>Damanpreet Singh</span>
          <i className="fa fa-caret"></i>
        </div>
      </div>
    );
  }
}

export default Header;
