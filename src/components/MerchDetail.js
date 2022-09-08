import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props){
  const { merch } = props;

  return (
    <React.Fragment>
      <h1>Merch Details</h1>
      <h3>{merch.price} - {merch.name} - {merch.quantity}</h3>
      <p><em>{merch.description}</em></p>
      <button onClick={ props.onClickingEdit }>Edit Item</button>
      <p> Quantity left: {merch.quantity}</p>
      {/* <button onClick={() => onClickingSell(merch.id)}></button> */}
      <hr/>
      <button onClick={()=> props.OnClickingDelete(merch.id)}>Delete Merch</button>
      <hr/>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  // onClickingSell: PropTypes.func
};

export default MerchDetail;