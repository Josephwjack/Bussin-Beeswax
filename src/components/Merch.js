import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMerchClicked(props.id)}>
        { /* We add a div with an onClick function. Don't forget to close out the div below! */}
        <h3>{props.price} - {props.name}</h3>
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
  id: PropTypes.string, // new PropType
  whenMerchClicked: PropTypes.func // new PropType
};

export default Merch;