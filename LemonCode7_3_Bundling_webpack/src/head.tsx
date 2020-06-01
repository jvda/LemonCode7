import React from 'react';
import ReactDOM from 'react-dom';
const logoImg = require('./content/logo_1.png');

export const Head: React.FunctionComponent = () => {
    return (
        <div className="head">
            <img className="logo" src={logoImg} ></img>
            <div className="head-description">
                <h1>Ejercicio Módulo 3 - Bundling </h1>
                <h1>Javier Úbeda Vázquez</h1>
            </div>
        </div>
    );
}

ReactDOM.render(
    <Head />,
    document.getElementById('head')
);
