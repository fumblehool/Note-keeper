import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../actions';

export class Users extends Component {
  componentDidMount() {
    this.props.actions.searchUserByAge(19);
  }

  render() {
    return (
      <div>
        hello there!!
        {this.props.users.map((user, index) => (
          <div key={index}>
            <div>{user.name}</div>
            <div>{user.age}</div>
          </div>
          ))}
      </div>
    );
  }
}

function mapStatesToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(Users);
