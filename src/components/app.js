import React, { Component } from 'react';
import InputBox from '../containers/input_box';
import ConvertedText from '../containers/converted_text';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputBox />
        <br />
        <ConvertedText />
      </div>
    );
  }
}
