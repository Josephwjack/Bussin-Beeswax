import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMerchClicked(props.id)}>
        <h3>{props.price} - {props.name} - {props.quantity}</h3>
        <p><em>{props.description}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  quantity: PropTypes.number,
  whenMerchClicked: PropTypes.func
};

export default Merch;