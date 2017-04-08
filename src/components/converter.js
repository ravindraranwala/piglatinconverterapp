import _ from 'lodash';
import React from 'react';
import piglatin from 'piglatin';

function convertToPigLatin(data){
  // https://www.npmjs.com/package/piglatin
  // return pigLatin(data);
}

export default (props) => {
  console.log(`${props.data}`);
  console.log(piglatin('hello there'));  // Works fine
  console.log(piglatin(`${props.data}`));    // This solved the issue
  return (
    <label>Hello !</label>
  )
}
