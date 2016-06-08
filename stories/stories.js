import React from 'react';
import { ChromePicker, CompactPicker, MaterialPicker, PhotoshopPicker,
  SketchPicker, SliderPicker, SwatchesPicker, CustomPicker } from '../lib';
var { Alpha } = require('../lib/components/common');

import { storiesOf, action } from '@kadira/storybook';

storiesOf('Pickers', module)
  .add('chrome picker', () => (
    <ChromePicker />
  ))
  .add('comapact picker', () => (
    <div style={{display: "inline-block"}}>
      <CompactPicker />
    </div>
  ))
  .add('material picker', () => (
    <div style={{display: "inline-block"}}>
      <MaterialPicker />
    </div>
  ))
  .add('photoshop picker', () => (
    <PhotoshopPicker />
  ))
  .add('sketch picker', () => (
    <SketchPicker />
  ))
  .add('slider picker', () => (
    <SliderPicker />
  ))
  .add('swatches picker', () => (
    <SwatchesPicker />
  ))

storiesOf('Alpha', module)
  .add('default', () => {
    class AlphaPicker extends React.Component {
      render() {
        return <div style={{position: "relative", width: 400, height: 10}}>
          <Alpha {...this.props}/>
        </div>;
      }
    }

    return React.createElement(CustomPicker(AlphaPicker))
  })
  .add('custom pointer', () => {
    class CustomPointer extends React.Component {
      render() {
        return (
          <div style={{
            width: '26px',
            height: '26px',
            borderRadius: '13px',
            borderStyle: 'solid',
            borderWidth: '3px',
            borderColor: 'rgb(90, 90, 125)',
            backgroundColor: 'rgb(248, 248, 248)',
            boxSizing: 'border-box',
            transform: 'translate(-13px, -3px)'
          }}></div>
        )
      }
    }

    class AlphaPicker extends React.Component {
      render() {
        return <div style={{position: "relative", width: 400, height: 20}}>
          <Alpha {...this.props} pointer={ CustomPointer }/>
        </div>;
      }
    }

    return React.createElement(CustomPicker(AlphaPicker))
  })
