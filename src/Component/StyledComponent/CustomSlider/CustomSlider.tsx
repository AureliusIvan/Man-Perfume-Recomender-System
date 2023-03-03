// import React from 'react'
// import { Button } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import styled from '@emotion/styled';
import withTheme from '@material-ui/core/styles/withTheme';


const marks = [
  {
    value: 10,
  },
  {
    value: 20,
    label: 'Tidak Penting',
  },
  {
    value: 30,
  },
  {
    value: 40,
  },
  {
    value: 50,
  },
  {
    value: 60,
  },
  {
    value: 70,
  },
  {
    value: 80,
    label: 'Sangat Penting',
  },
  {
    value: 90,
  },
];

const CSlider = styled(withTheme(Slider))((theme) => ({
  color: 'inherit',
  markerColor: 'inherit',
  markerSize: '100px',
  "::marker": {
    color: 'inherit',
    markerColor: 'inherit',
    markerSize: '100px',
  },
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
      defaultValue={30}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={props.step ? props.step : 10}
      // marks={props.marks ? props.marks : marks}
      min={props.min ? props.min : 0}
      max={props.max ? props.max : 100}
    />
  )
}