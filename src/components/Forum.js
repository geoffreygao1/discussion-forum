import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function Forum(props) {
  return (
    <>
      <hr />
      {props.postList.map((post) =>
        <Post
          postAuthor={post.postAuthor}
          postText={post.postText}
          timeStamp={post.timeStamp}
          voteCounter={post.voteCounter}
          upVoteClicked={props.upVotePost}
          downVoteClicked={props.downVotePost}
          id={post.id}
          key={post.id} />
      )}
    </>
  );
}

Forum.propTypes = {
  upVotePost: PropTypes.func,
  downVotePost: PropTypes.func,
  postList: PropTypes.object
}

export default Forum;