import React, { Component } from 'react';


class Header extends Component{
  state = {
    'title': 'All Stars',
    'showDropDown': false,
  };

  componentDidMount(){
    this.setHeaderTitle(this.props);
  };

  componentWillReceiveProps(nextProps) {
    this.setHeaderTitle(nextProps);
    if (this.state.showDropDown) {
      window.addEventListener('mousedown', this.handleClickOutside);
    }
  };

  handleClickOutside = () => {
    this.setState({
      'showDropDown': false
    });
  }

  onChangeSearchText = (e) => {
    this.props.handleChange(e.target.value.toLowerCase());
  }

  setHeaderTitle = (props) => {
    let title = props.history.location.search.split('=')[1];
    this.setState({
      title
    });
  }

  toggleDropDown = () => {
    this.setState({
      'showDropDown': !this.state.showDropDown
    });
  }

  render () {
    return(
      <div className="header">
        <div className="header-search">
          
          <h2>
            {this.state.title}
          </h2>
          
          {(()=>{
            if (this.state.title !== 'allStars' && this.state.title !== 'untagged'){
              return (
                <div className="header-settings">
                  <i className="fa fa-cog m-right"></i>
                </div>
              )
            }
          })()}

          <div className="header-form">
              <span className="input-group-addon">
                <i className="fa fa-search search-icon"></i>
              </span>  
              <input
                className="search-field m-l-20" 
                type="text" 
                placeholder="search"
                onChange={this.onChangeSearchText}
              />
          </div>
        </div>


          {(()=>{
            let username = '';
            let img_url = 'http://via.placeholder.com/350x150';
            if(this.props.user && this.props.user.get('userDetails').size){
              username = this.props.user.getIn(['userDetails', 'login']);
              img_url = this.props.user.getIn(['userDetails', 'avatar_url']);
            }

            return (
              <div className="header-user" onClick={this.toggleDropDown}>
                <img src={img_url} className="user-avatar"/>
                <span className="username m-right">{username}</span>
                <i className="fa fa-chevron-down"></i>
              </div>
            )
          })()}
          

        {(()=>{
          if(this.state.showDropDown){
            return(
              <div className="dropdown">
                <ul>
                  <li>test1</li>
                  <li>test2</li>
                  <li>test3</li>
                  <li>
                    <a href="http://dev.note-keeper.com:5000/logout">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

export default Header;
