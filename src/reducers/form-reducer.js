const formReducer = (state = {}, action) => {
  const { postAuthor, postText, timeStamp, id } = action;
  switch (action.type) {
    case 'ADD_POST':
      return Object.assign({}, state, {
        [id]: {
          postAuthor: postAuthor,
          postText: postText,
          timeStamp: timeStamp,
          id: id,
          voteCounter: 0
        }
      });
    case 'UPVOTE':
      // given an post id
      // increment the post id by +1
      // return the object
      let upvotedPost = { ...state[id], voteCounter: state[id].voteCounter + 1 };
      return Object.assign({}, state, upvotedPost);
    case 'DOWNVOTE':
      // given an post id
      // increment the post id by -1
      // return the object
      let downvotedPost = { ...state[id], voteCounter: state[id].voteCounter - 1 };
      return Object.assign({}, state, downvotedPost);
    default:
      return state;
  }
};


export default formReducer;