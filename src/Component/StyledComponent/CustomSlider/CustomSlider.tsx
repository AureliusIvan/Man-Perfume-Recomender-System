import "./CustomSlider.scss";

import React from 'react'
import Slider from '@mui/material/Slider';
import styled from '@emotion/styled';
import withTheme from '@material-ui/core/styles/withTheme';


const CSlider = styled(withTheme(Slider))(() => ({
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
  '& .MuiSlider-track': {
    color: 'transparent',
  },
}));


interface CustomSliderProps {
  name?: string,
  value?: number,
  onChange?: any,
  defaultValue?: number,
  valueLabelDisplay?: string,
  step?: number,
  min?: number,
  max?: number,
  scale?: any,
  getAriaValueText?: any,
  valueLabelFormat?: any,
}

export default function CustomSlider(props: CustomSliderProps) {
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
          aria-labelledby="non-linear-slider"
      />
  )
}