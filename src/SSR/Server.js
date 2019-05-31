import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import configureStore from '../Redux/ConfigureStore'
import template from '../../views/template';
import data from '../../assets/data.json';
import App from '../Containers/App'

var express = require('express');
var app = express();

// Serving static files
app.use('/assets', express.static('assets'));
app.use('/media', express.static('media'));

// hide powered by express
app.disable('x-powered-by');

// start the server
app.listen(process.env.PORT || 3000);

let initialState = {
    isFetching: false,
    apps: data
}

// server rendered home page
app.get('/*', (req, res) => {

    // Configure the store with the initial state provided
    const store = configureStore(initialState)

    // render the App store static markup ins content variable
    let content = renderToString(
        <Provider store={store} >
            <StaticRouter>
                <App />
            </StaticRouter>
        </Provider>
    );

    // Get a copy of store data to create the same store on client side 
    const preloadedState = store.getState()

    const response = template("Server Rendered Page", preloadedState, content)
    res.setHeader('Cache-Control', 'assets, max-age=604800')
    res.send(response);
});
