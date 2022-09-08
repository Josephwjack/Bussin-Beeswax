import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const reusableFormStyles = {
    width: '600px',
    border: '2px solid #dadada',
    borderRadius: '7px'
  }
  
  return (
    <React.Fragment>
      <div className="form-group d-flex flex-row justify-content-center my-4">
        <form onSubmit={props.formSubmissionHandler}>
          <div className="col my-2">
            <input style={reusableFormStyles}
              className="mx-3"
              type='text'
              name='name'
              placeholder='Gucci flip flops' />
          </div>
          <div className="col my-2">
            <input style={reusableFormStyles}
              className="mx-3"
              type='text'
              name='price'
              placeholder='Price' />
          </div>
          <div className="col my-2">
            <input style={reusableFormStyles}
            className="mx-3"
            type='number'
            name='quantity'
            placeholder='10' />
          </div>
          <div className="col text-center my-2">
            <textarea style={reusableFormStyles}
              className="mx-3"
              name='description'
              placeholder='Describe your merch.' />
          </div>
          <div className="d-flex justify-content-center">
            <button className="d-flex justify-content-center" type='submit'>{props.buttonText}</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.prototype = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;