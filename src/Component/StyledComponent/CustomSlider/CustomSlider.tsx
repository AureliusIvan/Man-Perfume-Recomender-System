// import React from 'react'
// import { Button } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';


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



export default function CustomSlider(props: any) {
  return (
    <Slider
      defaultValue={30}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={props.step ? props.step : 10}
      marks={props.marks ? props.marks : marks}
      min={props.min ? props.min : 0}
      max={props.max ? props.max : 100}
    />
  )
}