import TagsInput from 'react-tagsinput'
import React from 'react';
import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

class TagsInputField extends React.Component {
  constructor() {
    super()
  }

  componentWillMount() {
    // debugger;
    this.timer = null;
    
    const tags = this.props.repoDetails.get('tags').toArray()
    this.setState({
      tags
    });
  }

  componentDidMount() {
    // debugger;
  }
  

  handleChange = (tags) => {
    clearTimeout(this.timer); 
    this.setState({tags})

    this.timer = setTimeout(this.saveTags, 1000);
    
  };

  saveTags = () => {
    this.props.saveTags(this.state.tags);
  };

  render() {
    return([ 
      <TagsInput
        value={this.state.tags}
        onChange={this.handleChange}
        key="tagsInput0"
      />
    ])
  }
}

export default TagsInputField;
