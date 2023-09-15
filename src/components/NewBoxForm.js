import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";
import "./css/NewBoxForm.css";

function NewBoxForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewBoxFormSubmission}
        buttonText="Add box"
      />
    </React.Fragment>
  );
  function handleNewBoxFormSubmission(event) {
    event.preventDefault();
    props.onNewBoxCreation({
      color: event.target.color.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      numberOfLilikoi: event.target.numberOfLilikoi.value,
      id: v4(),
    });
  }
}
NewBoxForm.propTypes = {
  onNewBoxCreation: PropTypes.func,
};
export default NewBoxForm;
