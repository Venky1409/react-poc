import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store/store";
import {Provider} from 'react-redux';
import { ToastProvider } from 'react-toast-notifications'

ReactDOM.render(<Provider store={store}><ToastProvider><App /></ToastProvider></Provider>, document.getElementById('root'));
serviceWorker.unregister();
