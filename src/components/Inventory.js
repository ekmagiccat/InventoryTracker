import React from "react";
import Box from "./Box";
import PropTypes from "prop-types";

function Inventory(props) {
  let inventory;

  if (props.inventory[0] === undefined) {
    inventory =
      "No boxes of lilikoi have been added to the inventory list yet!";
  } else {
    inventory = props.inventory.map((box) => (
      <Box
        whenBoxClicked={props.onBoxSelection}
        color={box.color}
        origin={box.origin}
        price={box.price}
      />
    ));
  }
  return (
    <React.Fragment>
      <h1>Lily's Lilikoi Inventory:</h1>
      <h4> {inventory} </h4>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  inventory: PropTypes.array,
  onBoxSelection: PropTypes.func,
};

export default Inventory;
