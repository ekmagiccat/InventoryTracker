import React from "react";
import PropTypes from "prop-types";

function Box(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenBoxClicked(props.id)}>
        <h3>
          {props.color} - {props.origin}
        </h3>
        <p>
          <em>{props.price}</em>
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Box.propTypes = {
  color: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenBoxClicked: PropTypes.func,
};

export default Box;
