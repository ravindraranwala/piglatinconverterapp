import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { pigLatinConvert } from '../actions/index';

class InputBox extends Component {
  render() {
    const { fields: { inputtext }, handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.props.pigLatinConvert)} >
          <h3>Pig Latin Converter</h3>
          <div className={`form-group ${inputtext.touched && inputtext.invalid ? 'has-danger' : ''}`}>
            <label>Enter a Text</label>
            <textarea className="form-control" {...inputtext} />
            <div className="text-help">
              {inputtext.touched ? inputtext.error : ''}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.inputtext) {
    errors.inputtext = 'Enter a text here';
  }
  return errors;
}

export default reduxForm({
  form: 'PigLatinForm',
  fields: ['inputtext'],
  validate
}, null, { pigLatinConvert } )(InputBox);
