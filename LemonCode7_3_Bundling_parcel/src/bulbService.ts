import { css } from '@emotion/core'
const bulbOn = require('./content/bulbon.svg');
const bulbOff = require('./content/bulboff.svg');

interface Bright {
    yellow: number;
    white: number;
    blur: number;
    transparent: number;
}

export const turn = (ligth: number) => ligth == 0 ? 100 : 0;

export const bulb = (switchligth: number) => switchligth == 0 ? bulbOff : bulbOn;

const gradient = (porcent: number): Bright => {
    return {
        yellow: porcent / 2,
        white: porcent,
        blur: porcent,
        transparent: 100 - (50 - porcent),
    };
}

const lightGradient = (bright: Bright) => {
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    return css`.app {
                    background: radial-gradient(    
                                circle at center,  
                                rgba(249,241,0,1) ${bright.yellow}%,
                                rgba(255,255,255,1) ${bright.white}%,
                                rgba(255,255,255,1) ${bright.blur}%,
                                rgba(255,255,255,0) ${bright.transparent}%);
                    }`;
}

export const background = (switchligth: number) => lightGradient(gradient(switchligth));
