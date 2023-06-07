import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div>
        <h3>{props.postAuthor}</h3>
        <p>{props.postText}</p>
        <p><em>{Date(props.timeStamp)}</em></p>
        <button onClick={() => props.upVoteClicked(props.id)}>Upvote</button>
        <button onClick={() => props.downVoteClicked(props.id)}>Downvote</button>
        <hr />
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  postAuthor: PropTypes.string,
  postText: PropTypes.string,
  id: PropTypes.string,
  voteCounter: PropTypes.number,
  timeStamp: PropTypes.number,
  upVoteClicked: PropTypes.func,
  downVoteClicked: PropTypes.func
};

export default Post;