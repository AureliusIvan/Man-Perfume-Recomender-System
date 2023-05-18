// import React from 'react'
// import { Button } from '@material-ui/core';
// import Slider from '@material-ui/core/Slider';
import Slider from '@mui/material/Slider';
import styled from '@emotion/styled';
import withTheme from '@material-ui/core/styles/withTheme';
import "./CustomSlider.scss";



const CSlider = styled(withTheme(Slider))((theme) => ({
  marklabel: {
    color: 'inherit',
    markerColor: 'inherit',
    markerSize: '100px',
  },
  [`&.{MuiSlider-markLabelActive}`]: {
    color: 'inherit',
    markerColor: 'inherit',
    markerSize: '100px',
  },
  // change slider line color
  '& .MuiSlider-track': {
    color: 'transparent',
  },
}));


export default function CustomSlider(props: any) {
  return (
    <CSlider
      name={props.name ? props.name : "slider"}
      value={props.value}
      onChange={props.onChange ? props.onChange : ""}
      defaultValue={4}
      valueLabelDisplay="auto"
      step={props.step ? props.step : 1}
      min={props.min ? props.min : 1}
      max={props.max ? props.max : 7}
      scale={props.scale ? props.scale : x => x}
      getAriaValueText={props.getAriaValueText ? props.getAriaValueText : (value) => value}
      valueLabelFormat={props.valueLabelFormat ? props.valueLabelFormat : (value) => value}
      classes={{
        track: "slider-track",
      }}
      // valueLabelDisplay="auto"
      aria-labelledby="non-linear-slider"
    />
  )
}