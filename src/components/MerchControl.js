import React from 'react';
import NewMerchForm from './NewMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import EditMerchForm from './EditMerchForm';
import { connect } from 'react-redux';
import Merch from './Merch';
import PropTypes from 'prop-types';

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedMerch: null,
      editing: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.props.mainMerchList[id];
    this.setState({selectedMerch: selectedMerch});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }


  handleEditingMerchInList = (merchToEdit) => {
    const { dispatch } = this.props;
    const { id, name, price, description, quantity } = merchToEdit;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: name,
      price: price,
      description: description,
      quantity: quantity
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedMerch: null
    });
  }

  handleClick = () => {
    if (this.state.selectedMerch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMerch: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewMerchToList = (newMerch) => {
    const { dispatch } = this.props;
    const { id, name, price, description, quantity } = newMerch;
    const action = {
      type: 'ADD_ITEM',
      id: id,
      name: name,
      price: price,
      description: description,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false });
  }

  handleDeletingMerch = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_ITEM',
      id: id
    }
    dispatch(action);
    this.setState({selectedMerch: null});
  }


  render(){
      let currentlyVisibleState = null;
      let buttonText = null; 

      if (this.state.editing ) {      
        currentlyVisibleState = currentlyVisibleState = <EditMerchForm merch = {this.state.selectedMerch} onEditMerch = {this.handleEditingMerchInList} />
        buttonText = "Return to Merch List";
      } else if (this.state.selectedMerch != null) {
        currentlyVisibleState = <MerchDetail merch = {this.state.selectedMerch}
        onClickingDelete = {this.handleDeletingMerch}
        onClickingEdit = { this.handleEditClick} />
        buttonText = "Return to merch List";
      }
      else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList}  />;
        buttonText = "Return to Merch List";
      } else {
        currentlyVisibleState = <MerchList merchList={this.props.mainMerchList} onMerchSelection={this.handleChangingSelectedMerch} />;
        buttonText = "Add Merch";
      }
    return (
      <React.Fragment>
        <div className="container my-4">
          <div className="row">
            <div className="col">
              {currentlyVisibleState}
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <button className="btn btn-primary" onClick={this.handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    );
  }

}

MerchControl.propTypes = {
  mainMerchList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    mainMerchList: state
  }
}

MerchControl = connect(mapStateToProps)(MerchControl);

export default MerchControl;