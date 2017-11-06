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
    if (this.state.tag){
      this.props.addNewTag(this.state.tag);
    }
    this.setState({
      'tag': ''
    });
  };

  render() {
    if (this.props.active) {
      return (
        <div className="tags-form">
          <input className="tags-form-input" placeholder="Tag name" type="text"
            onChange={this.handleTagNameChange} value={this.state.tag}
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
