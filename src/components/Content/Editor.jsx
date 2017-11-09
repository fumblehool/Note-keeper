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
    var div = document.createElement("div");
    div.innerHTML = this.state.text;
    var text = div.textContent || div.innerText || "";

    console.log(this.state.text);
    this.props.saveText(this.state.text);
    
  }
  
  render() {
    const divStyle = {
      border: 'none',
      fontSize: '.9 rem',
    };

    return ([
      <ReactQuill value={this.state.text}
        onChange={this.handleChange}
        className="react-quill"
        key="0"
      >
        <div className="my-editing-area" style={divStyle}>
      </div>
      </ReactQuill>,
    ])
  }
}

export default NotesEditor;
