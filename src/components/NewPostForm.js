import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewPostForm(props) {
  function postFormSubmissionHandler(event) {
    event.preventDefault();
    props.onNewPostCreation({
      postAuthor: event.target.postAuthor.value,
      postText: event.target.postText.value,
      timeStamp: Date.now(),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={postFormSubmissionHandler}
        buttonText="Submit Post" />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;