import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskApp from './components/TaskApp.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TaskApp />, document.getElementById('root'));
registerServiceWorker();
