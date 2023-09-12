import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditBoxForm(props) {
  const { box } = props;

  function handleEditBoxFormSubmission(event) {
    event.preventDefault();
    props.onEditBox({
      color: event.target.color.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      numberOfLilikoi: event.target.numberOfLilikoi.value,
      id: box.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditBoxFormSubmission}
        buttonText="Update Box"
      />
    </React.Fragment>
  );
}

EditBoxForm.propTypes = {
  onEditBox: PropTypes.func,
  box: PropTypes.object,
};

export default EditBoxForm;
