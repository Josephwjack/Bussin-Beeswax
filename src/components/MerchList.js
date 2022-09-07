import React from 'react';
import Merch from './Merch';
import PropTypes from 'prop-types';

function MerchList(props) {
  return (
    <React.Fragment>
      <h3>Merch List</h3>
      {props.merchList.length > 0 ? (
        props.merchList.map((merch) => (
          <Merch
            // whenMerchClicked={props.onMerchSelection}
            name={merch.name}
            price={merch.price}
            description={merch.description}
            id={merch.id}
            key={merch.id}
          />
        ))
      ) : (
        <h3>No Merch Available</h3>
      )}
     </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onMerchSelection: PropTypes.func,
};

export default MerchList;