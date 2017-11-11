import React from 'react';
import ReactQuill from 'react-quill';
import '../../sass/quill.snow.css'

class NotesEditor extends React.Component {

  componentWillMount() {
    this.timer = null;
  }

  componentWillMount(){
    this.setState({
      text: this.props.notes
    });
  }

  handleChange = (text) => {
    clearTimeout(this.timer);
    
    this.setState({ text });
    this.timer = setTimeout(this.saveText, 1000);
  }

  saveText = () => {
    this.props.saveText(this.state.text);
  }
  
  render() {
    return ([
      <ReactQuill value={this.state.text}
        onChange={this.handleChange}
        className="react-quill"
        key="0"
      >
      </ReactQuill>,
    ])
  }
}

export default NotesEditor;
