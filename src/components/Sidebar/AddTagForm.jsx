import React, { Component } from 'react';


class AddTagForm extends Component {
  state = {
    'tag': ''
  };

  handleTagNameChange = (e) => {
    this.setState({
      'tag': e.target.value
    });
  }

  addnewTag = () => {
    console.log(this.state.tag);
  };

  render() {
    if (this.props.active) {
      return (
        <div className="tags-form">
          <input className="tags-form-input" placeholder="Tag name" type="text"
            onChange={this.handleTagNameChange}
          />
          <button onClick={this.addnewTag}>
            Save
          </button>
        </div>
      );
    }
    return (
      <div />
    );
  }
}

export default AddTagForm;
