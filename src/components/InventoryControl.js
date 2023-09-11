import React from "react";
import Inventory from "./InventoryList";
import BoxDetail from "./BoxDetail";
import NewBoxForm from "./NewBoxForm";
import EditBoxForm from "./EditBoxForm";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedBox: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedBox != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBox: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleDeletingBox = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(
      (box) => box.id !== id
    );
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedBox: null,
    });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingBoxInList = (boxToEdit) => {
    const editedMainInventoryList = this.state.mainInventoryList
      .filter((box) => box.id !== this.state.selectedBox.id)
      .concat(boxToEdit);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedBox: null,
    });
  };

  handleAddingNewBoxToList = (newBox) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newBox);
    this.setState({
      mainInventoryList: newMainInventoryList,
      formVisibleOnPage: false,
    });
  };
  handleChangingSelectedBox = (id) => {
    const selectedBox = this.state.mainInventoryList.filter(
      (box) => box.id === id
    )[0];
    this.setState({ selectedBox: selectedBox });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditBoxForm
          box={this.state.selectedBox}
          onEditBox={this.handleEditingBoxInList}
        />
      );
      buttonText = "Return to Inventory List";
    } else if (this.state.selectedBox != null) {
      currentlyVisibleState = (
        <BoxDetail
          box={this.state.selectedBox}
          onClickingDelete={this.handleDeletingBox}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Inventory List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewBoxForm onNewBoxCreation={this.handleAddingNewBoxToList} />
      );
      buttonText = "Return to Inventory List";
    } else {
      currentlyVisibleState = (
        <Inventory
          inventoryList={this.state.mainInventoryList}
          onBoxSelection={this.handleChangingSelectedBox}
        />
      );
      buttonText = "Add Box to Inventory";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>{" "}
      </React.Fragment>
    );
  }
}
export default InventoryControl;
