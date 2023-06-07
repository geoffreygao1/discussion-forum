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
    const action = {
      type: 'UPVOTE',
      id: postId
    }
    dispatch(action);
  }

  handleDownVoteClick = (postId) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DOWNVOTE',
      id: postId
    }
    dispatch(action);
  }

  //Render
  render() {
    let submissionForm = null;
    let displayPostList = null;
    let buttonText = null;
    submissionForm = <NewPostForm onNewPostCreation={this.handleAddingNewPost} />;
    displayPostList = <Forum upVotePost={this.handleUpVoteClick} downVotePost={this.handleDownVoteClick} postList={this.props.postList} />
    buttonText = "Return to Ticket List";

    return (
      <React.Fragment>
        <h1>Submit a Post:</h1>
        {submissionForm}
        <hr></hr>
        <h1>Post List:</h1>
        {displayPostList}
      </React.Fragment>
    );
  }
}

ForumControl.propTypes = {
  propList: PropTypes.object
};

//mapStateToProps

const mapStateToProps = state => {
  return {
    postList: state.postList
  }
}

ForumControl = connect(mapStateToProps)(ForumControl);

export default ForumControl;