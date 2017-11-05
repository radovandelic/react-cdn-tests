import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { AceEditor } from './App';
import registerServiceWorker from './registerServiceWorker';



render(<App />, document.getElementById('root'));
render(<AceEditor />, document.getElementById('editor'));

registerServiceWorker();
