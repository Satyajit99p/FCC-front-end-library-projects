import './App.css';
import React, {Component} from 'react';
import { marked } from 'marked'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'

class App extends Component{
  state = {
    markdown:""
  };
  updateMarkdown = function(markdown){
    this.setState({markdown})
  }
  render(){
     let {markdown} = this.state;
      console.log(markdown);


  return (
    <div className="App container">
      <div>
        <FormGroup controlId = "formControlsTextArea">
          <FormLabel><h1>Markdown Input</h1></FormLabel>
          <div id="editor">
          <FormControl componentClass = "textarea" placeholder = "Enter Markdown" value={markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}></FormControl>
          </div>
          </FormGroup>
      </div>
      <div id="preview">
        <h1>Markdown Output</h1>
          <div dangerouslySetInnerHTML = {{__html:marked(markdown)}}></div>
        </div>
    </div>
  );
}
}

export default App;
