import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Scheduler from "./Component/Scheduler";

ReactDOM.render(
  <Scheduler date = {new Date()}/>,document.getElementById('root')
);
serviceWorker.unregister();
