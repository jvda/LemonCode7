import React from 'react';
import ReactDOM from 'react-dom';
import { BulbComponent } from './bulbComponent';
import "./index.scss";

ReactDOM.render(
    <div className="root">
        <BulbComponent />
    </div>,
    document.getElementById('root')
);

