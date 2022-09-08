import React from 'react';
import NewMerchForm from './NewMerchForm';
import MerchList from './MerchList';
import MerchDetail from './MerchDetail';
import EditMerchForm from './EditMerchForm';

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainMerchList: [],
      selectedMerch: null,
      editing: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.mainMerchList.filter(merch => merch.id === id)[0];
    this.setState({selectedMerch: selectedMerch});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }


  handleEditingMerchInList = (merchToEdit) => {
    const editedMainMerchList = this.state.mainMerchList
      .filter(merch => merch.id !== this.state.selectedMerch.id)
      .concat(merchToEdit);
    this.setState({
        mainMerchList: editedMainMerchList,
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
    const newMainMerchList = this.state.mainMerchList.concat(newMerch);
    this.setState({
      mainMerchList: newMainMerchList,
      formVisibleOnPage: false });
  }

  handleDeletingMerch = (id) => {
    const newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !== id);
    this.setState({
      mainMerchList: newMainMerchList,
      selectedMerch: null
    });
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
        currentlyVisibleState = <MerchList merchList={this.state.mainMerchList} onMerchSelection={this.handleChangingSelectedMerch} />;
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
export default MerchControl;