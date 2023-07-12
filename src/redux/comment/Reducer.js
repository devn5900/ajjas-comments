import { findAndAdd } from "../../utills/comment";
import { ADD_NEW_CMNT, ADD_REPLY } from "./actionType";

const init = {
  comments: [],
};

export const CommentReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_NEW_CMNT:
      return { ...state, comments: [...state.comments, payload] };
      case ADD_REPLY:return {
        ...state,
        comments:findAndAdd(payload.id,payload.data,state.comments)
      }
    default:
      return state;
  }
};
