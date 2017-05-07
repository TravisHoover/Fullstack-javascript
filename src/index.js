import React from 'react';
import ReactDOM from 'react-dom';
import data from './testData';
import App from './components/app';

ReactDOM.render(
    <App boards={data.boards} />,
    document.getElementById('root')
);
