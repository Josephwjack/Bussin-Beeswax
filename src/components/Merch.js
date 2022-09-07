import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return (
    <React.Fragment>
      <h3>{props.price} - {props.name}</h3>
      <p><em>{props.description}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string
};

export default Merch;