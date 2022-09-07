import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewMerchForm(props){

  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
      name: event.target.name.value, 
      price: event.target.price.value, 
      description: event.target.description.value, 
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewMerchFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Gucci flip flops' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <textarea
          name='description'
          placeholder='Describe your merch.' />
        <button type='submit'>Add merch!</button>
      </form>
      
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;