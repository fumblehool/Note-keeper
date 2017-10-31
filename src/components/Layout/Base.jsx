import React, { Component } from 'react';
import Logo from './Logo';
import Header from './Header';
import Sidebar from './Sidebar';
import SideContent from './SideContent';
import MainContent from './MainContent';
// import Users from './../../containers/Users';
import Footer from './Footer';

class Base extends Component{
  render () {
    return(
      <div className="wrapper b-red">
      <div className=" sidebar b-black">
      <div className="logo b-green">
        <Logo/>
      </div>
      <div className="sidebar-content b-black">
        <Sidebar/>
        <div className="sidebar-item b-black">
          Item1
        </div>
      </div>
    </div>
    
            <div className="main-content b-blue">
              <div className="header b-red">
                <div className="header-item b-blue">
                  Search 
                </div>

                <Header/>

                <div className="header-item b-blue">
                  User
                </div>
              </div>


      <div className=" content b-black">
        <div className=" content-sidebar b-green ">
          
        <SideContent/>
          <div className="content-sidebar-header">
            Header
          </div>
            <div className="content-sidebar-item">
              Item 1
            </div>
            


        </div>

        <div className="b-violet section">
        <MainContent/>
        </div>
      </div>
  </div>
  </div>

    );
  }
}

export default Base;