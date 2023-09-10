import React from "react";
import Inventory from "./Inventory";
import BoxDetail from "./BoxDetail";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedBox: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedBox != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBox: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
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

    if (this.state.selectedBox != null) {
      currentlyVisibleState = (
        <BoxDetail
          box={this.state.selectedBox}
          onClickingDelete={this.handleDeletingBox}
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
