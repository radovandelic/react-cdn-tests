import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { AceEditor } from './App';
import registerServiceWorker from './registerServiceWorker';
//var React = require("./react").React;
//var ReactDOM = require("./react").ReactDOM;



render(<App />, document.getElementById('root'));
render(<AceEditor />, document.getElementById('editor'));

/*window.onload = function () {
    var ace = window.ace;
    var editor = ace.edit("editor");
    //editor.setValue("testing");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");

}*/
registerServiceWorker();
