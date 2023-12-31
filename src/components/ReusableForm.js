import React from "react";
import PropTypes from "prop-types";
import "./css/ReusableForm.css";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="color" placeholder="Fruit Color" />
        <input type="text" name="origin" placeholder="Origin" />
        <input
          type="number"
          step="0.01"
          min="0.00"
          name="price"
          placeholder="Price"
        />
        <input
          type="text"
          name="numberOfLilikoi"
          placeholder="Number of Lilikoi"
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
