import React, { Component } from 'react';

class MainContent extends Component{
  render() {
    return(
      <div className="section">
      	<div className="section-topbar">
        	<div className="edit">	
            <div>
        		  <button className="repo-action">
                <i className="fa fa-tag m-right"></i>
                Edit tags
              </button>
            </div>
            <div>
        		<button className="repo-action">
              <i className="fa fa-sticky-note m-right"></i>
              Notes
            </button>
            </div>
          </div>

          <div className="clone-repo">
            <label>
              Clone: 
            </label>  
      		  <input className="clone-repo-input" disabled placeholder="git@github.com:GoogleChrome/samples.git"/>
          </div>  
      	</div>
        
        <div className="repo-readme">
          Repo readme.
        </div>
      </div>
    );
  }
}

export default MainContent;
