import React from "react";
import Inventory from "./InventoryList";
import BoxDetail from "./BoxDetail";
import NewBoxForm from "./NewBoxForm";
import EditBoxForm from "./EditBoxForm";
import "./css/InventoryControl.css";

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

  handleSellingBox = () => {
    const selectedBox = this.state.selectedBox;

    if (selectedBox && selectedBox.numberOfLilikoi > 0) {
      const lilikoiSold = this.state.mainInventoryList.find(
        (box) => box.id === selectedBox.id
      );

      if (lilikoiSold) {
        lilikoiSold.numberOfLilikoi--;
        const editedMainInventoryList = this.state.mainInventoryList
          .filter((box) => box.id !== selectedBox.id)
          .concat(lilikoiSold);
        this.setState({
          mainInventoryList: editedMainInventoryList,
        });
      }
    }
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
    if (
      newBox.color.trim() === "" ||
      newBox.origin.trim() === "" ||
      newBox.price.trim() === ""
    ) {
      this.setState({ errorMessage: "Please fill in all fields" });
      return;
    }
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

  handleDeletingBox = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(
      (box) => box.id !== id
    );
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedBox: null,
    });
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
          onClickingSell={this.handleSellingBox}
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
