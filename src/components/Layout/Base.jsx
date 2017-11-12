import React, { PureComponent } from 'react';
// import Users from './../../containers/Users';
import HeaderContainer from './../../containers/Header';
import SidebarContainer from './../../containers/Sidebar';
import Content from './../../containers/Content';
// import Footer from './Footer';

class Base extends PureComponent {
  state = {
    'searchText': ''
  };

  componentDidMount() {
    if (!this.props.history.location.search) {
      this.props.history.push(`?tag=allStars`);
    }
  }
  
  componentWillReceiveProps() {
    // let self = this;
    
    // if (this.refs.headerContainer.refs.header.state.showDropDown) {
    //   window.addEventListener('mousedown', this.handleMouseClick);
    // }
    // debugger;
  }

  handleMouseClick = () => {
    this.refs.headerContainer.refs.header.handleClickOutside();
  }

  handleSearchChange = (text) => {
    this.setState({
      searchText: text
    });
  }

  render() {
    return ([
        <SidebarContainer key="0" history={this.props.history} />,
        <div className="main-content" key="1">
          <HeaderContainer
           history={this.props.history}
           ref="headerContainer"
           handleChange={this.handleSearchChange}
          />
          <Content
            history={this.props.history}
            tagName={this.props.history.location.search.split('=')[1]}
            searchText={this.state.searchText}
          />
        </div>,
    ]);
  }
}

export default Base;
