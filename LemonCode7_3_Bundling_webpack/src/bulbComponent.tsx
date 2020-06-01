// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { Global, jsx, css } from '@emotion/core'
import React from 'react';
import { turn, bulb, background } from './bulbService';
import Fab from '@material-ui/core/Fab';
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import Slider from '@material-ui/core/Slider';

const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 100,
    label: '100%',
  },
];

export const BulbComponent: React.FunctionComponent = () => {
  const [light, setTurnLight] = React.useState<number>(0);

  const handleClickOnOff = e => setTurnLight(turn(light));

  const handleChangeSlider = (event: any, newValue: number) => setTurnLight(newValue);

  return (
    <div className="bulb-control">
      <Global
        styles={background(light)}
      />
      <div className="button-onoff">
        <Fab color="primary" onClick={handleClickOnOff}>
          <SettingsPowerIcon />
        </Fab>
      </div>
      <img className='bulb' src={bulb(light)} ></img>
      <div className="slider-dimer">
        <Slider
          value={light}
          step={1}
          marks={marks}
          valueLabelDisplay="on"
          onChange={handleChangeSlider}
        />
      </div>

    </div >
  );
};
