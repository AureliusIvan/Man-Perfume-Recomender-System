// import React from 'react'
// import { Button } from '@material-ui/core';
// import Slider from '@material-ui/core/Slider';
import Slider from '@mui/material/Slider';
import styled from '@emotion/styled';
import withTheme from '@material-ui/core/styles/withTheme';


const marks = [
  {
    value: 0,
  },
  {
    value: 1,
    label: 'Tidak Penting',
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
  {
    value: 4,
  },
  {
    value: 5,
  },
];

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
}));


export default function CustomSlider(props: any) {
  return (
    <CSlider
      name={props.name ? props.name : "slider"}
      value={props.value}
      onChange={props.onChange ? props.onChange : ""}
      defaultValue={3}
      // aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={props.step ? props.step : 1}
      // marks={props.marks ? props.marks : marks}
      min={props.min ? props.min : 0}
      max={props.max ? props.max : 6}
      scale={props.scale ? props.scale : x => x}
      getAriaValueText={props.getAriaValueText ? props.getAriaValueText : (value) => value}
      valueLabelFormat={props.valueLabelFormat ? props.valueLabelFormat : (value) => value}
      // valueLabelDisplay="auto"
      aria-labelledby="non-linear-slider"
    />
  )
}