import React from 'react';
import { connect } from 'react-redux';

const ConvertedText = (props) => {
  return(
    <label>{props.output}</label>
  );
}

function mapStateToProps(state){
  return { output: state.piglatin.output };
}

export default connect(mapStateToProps)(ConvertedText);
