import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Button from './Button'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Button />, document.getElementById('impl'));

serviceWorker.unregister();
