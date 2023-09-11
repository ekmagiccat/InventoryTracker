import React from "react";
import Box from "./Box";
import PropTypes from "prop-types";

function InventoryList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.inventoryList.map((box) => (
        <Box
          whenBoxClicked={props.onBoxSelection}
          color={box.color}
          origin={box.origin}
          price={box.price}
          id={box.id}
          key={box.id}
        />
      ))}
    </React.Fragment>
  );
}
InventoryList.propTypes = {
  inventoryList: PropTypes.array,
  onBoxSelection: PropTypes.func,
};

export default InventoryList;
