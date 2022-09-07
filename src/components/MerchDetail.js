import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props){
  const { merch } = props;

  return (
    <React.Fragment>
      <h1>Merch Detail</h1>
      <h3>{merch.price} - {merch.name}</h3>
      <p><em>{merch.description}</em></p>
      <hr/>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  Merch: PropTypes.object
};

export default MerchDetail;