import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditMerchForm (props) {
  const { merch } = props;

  function handleEditMerchFormSubmission(event) {
    event.preventDefault();
    props.onEditMerch({name: event.target.name.value, price: event.target.price.value, quantity: event.target.quantity.value, description: event.target.description.value, id: merch.id})
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditMerchFormSubmission}
        buttonText="Update Item" />
    </React.Fragment>
  );
}

EditMerchForm.propTypes = {
  merch: PropTypes.object,
  onEditMerch: PropTypes.func
};

export default EditMerchForm;