import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bulma/css/bulma.css' ;
import './index.css'
import './App.css'
import { store } from './store/store.js';
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
