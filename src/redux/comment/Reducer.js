import { disLikeData, findAndAdd, findAndLike } from "../../utills/comment";
import { ADD_NEW_CMNT, ADD_REPLY, DISLIKE_COMMENT, LIKE_COMMENT } from "./actionType";

const init = {
  comments: [],
};

export const CommentReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_NEW_CMNT:
      return { ...state, comments: [...state.comments, payload] };
    case ADD_REPLY:
      return {
        ...state,
        comments: findAndAdd(payload.id, payload.data, state.comments),
      };
    case LIKE_COMMENT:
      return { ...state, comments: findAndLike(payload, state.comments) };
   case DISLIKE_COMMENT:return {...state,comments:disLikeData(payload,state.comments)}
      default:
      return state;
  }
};
