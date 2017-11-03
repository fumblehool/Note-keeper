import React, { Component } from 'react';

class SideContent extends Component{
  render() {
    return(
      <ul className="content-sidebar-repos">
        <li className="content-sidebar-li">
          <h3 className="content-sidebar-li-h3">
            GoogleChrome/samples
            </h3> 
          <div className="content-sidebar-li-description">
            A repo containing samples tied to new functionality in each release of Google Chrome.
          </div>
          <ul className="content-sidebar-li-tags">
            <li>test</li>
            <li>test2</li>
          </ul>
          <div className="content-sidebar-li-repo-stats">
            <div className="stars">
              <i className="fa fa-star m-right"></i>
              3088
            </div>
            <div className="forks">
              <i className="fa fa-code-fork m-right"></i>
              1206
            </div>
            <div className="link">
              <a href="#">
                View on GitHub
              </a>
            </div>
          </div>
 
        </li>
      </ul>  
    );
  }
}

export default SideContent;
