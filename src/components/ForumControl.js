import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Post from './Post';
import Forum from './Forum';
import NewPostForm from './NewPostForm';

class ForumControl extends React.Component {
  //Constructor
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  //Functions
  handleAddingNewPost = (newPost) => {
    const { dispatch } = this.props;
    const { postAuthor, postText, timeStamp, id } = newPost;
    const action = {
      type: 'ADD_POST',
      postAuthor: postAuthor,
      postText: postText,
      timeStamp: timeStamp,
      id: id,
    }
    dispatch(action);
  }

  handleUpVoteClick = (postId) => {
    const { dispatch } = this.props;
    const { id } = postId;
    const action = {
      type: 'UPVOTE',
      id: id,
    }
    dispatch(action);
  }

  //Render
  render() {
    currentlyVisibleState = <NewPostForm onNewPostCreation={this.handleAddingNewPost} />;
    buttonText = "Return to Ticket List";

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

ForumControl.propTypes = {

};

//mapStateToProps

export default ForumControl;