import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="editor" style={{ margin: "auto", width: "90vw", height: "100vh" }}>Default text </div>
      </div >
    );
  }
}

//var ace = require("./ace/ace");
var ace = window.ace;
export class AceEditor extends React.Component {

  /*static propTypes = {
    mode: React.PropTypes.string,
    content: React.PropTypes.string,
  };*/

  static defaultProps = {
    mode: 'javascript',
    code: '//write your code here',
  };

  componentDidMount() {
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    ace.require("ace/ext/language_tools");
    editor.getSession().setMode("ace/mode/javascript");
    editor.setShowPrintMargin(false);
    editor.setOptions({ enableLiveAutocompletion: true, enableSnippets: true });
    editor.setOptions({ minLines: 25, maxLines: 50 });
  }

  render() {
    const style = { fontSize: '14px !important', border: '1px solid lightgray' };
    return (
      <div ref="editor" style={style}>
        {this.props.code}
      </div>
    );
  }
}

export default App;