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

  addNewTag = () => {
    console.log(this.state.tag);
    this.props.addNewTag(this.state.tag);
  };

  render() {
    if (this.props.active) {
      return (
        <div className="tags-form">
          <input className="tags-form-input" placeholder="Tag name" type="text"
            onChange={this.handleTagNameChange}
          />
          <button onClick={this.addNewTag}>
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
