import React from "react";
import PropTypes from "prop-types";

function BoxDetail(props) {
  const { box, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Box Detail</h1>
      <h3>
        {box.color} - {box.origin}
      </h3>
      <p>
        <em>{box.price}</em>
      </p>
      <button onClick={onClickingEdit}>Update Box</button>
      <button onClick={() => onClickingDelete(box.id)}>Delete Box</button>
      <hr />
    </React.Fragment>
  );
}

BoxDetail.propTypes = {
  box: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default BoxDetail;
