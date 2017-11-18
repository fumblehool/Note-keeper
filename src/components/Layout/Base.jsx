import React, { PureComponent } from 'react';
// import Users from './../../containers/Users';
import HeaderContainer from './../../containers/Header';
import SidebarContainer from './../../containers/Sidebar';
import Content from './../../containers/Content';
// import Footer from './Footer';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions';


class Base extends PureComponent {
  state = {
    'searchText': ''
  };

  componentWillMount() {
    this.props.actions.refreshRepoList();
    this.props.actions.fetchUserDetails();
  }
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
  }

  handleMouseClick = () => {
    this.refs.headerContainer.refs.header.handleClickOutside();
  };

  handleSearchChange = (text) => {
    this.setState({
      searchText: text
    });
  };

  render() {
    return ([
        <SidebarContainer key="0" history={this.props.history} />,
        <div className="main-content" key="1">
          <HeaderContainer
           history={this.props.history}
           ref="headerContainer"
           handleChange={this.handleSearchChange}
           user={this.props.user}
          />
          <Content
            history={this.props.history}
            tagName={this.props.history.location.search.split('=')[1]}
            searchText={this.state.searchText}
            repos={this.props.repos}
            history={this.props.history}
            actions={this.props.actions}
          />
        </div>,
    ]);
  }
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

function mapStatesToProps(state) {
  return {
    repos: state.repos,
    user: state.user,
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(Base);
