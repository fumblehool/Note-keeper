import TagsInput from 'react-tagsinput'
import React from 'react';
import '../../sass/react-tagsinput.css';
import _ from 'lodash';


class TagsInputField extends React.Component {
  componentWillMount() {
    const tags = this.props.repoDetails.get('tags').toArray()
    this.setState({
      tags
    });
  }
  
  handleChange = (tags) => {
    this.setState({tags})
  };

  saveTags = () => {
    if(_.uniq(this.state.tags).length === this.state.tags.length){
      this.props.saveTags(this.state.tags);
    } else {
      alert('duplicate tags found!');
    }
  };

  render() {
    return([ 
      <TagsInput
        value={this.state.tags}
        onChange={this.handleChange}
        key="tagsInput0"
      />,
      <div key="1">
        <button onClick={this.saveTags}>Submit</button>
      </div>
    ])
  }
}

export default TagsInputField;
