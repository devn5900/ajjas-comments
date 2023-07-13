import { ADD_NEW_CMNT, ADD_REPLY, DISLIKE_COMMENT, LIKE_COMMENT } from "./actionType"


export const addNewComment=(data)=>{
    return {type:ADD_NEW_CMNT,payload:data}
}

export const addReply=(id,data)=>{
    return {type:ADD_REPLY,payload:{id,data}};
}

export const likeComment=(id)=>{
    return {type:LIKE_COMMENT,payload:id}
}
export const dislikeComment=(id)=>{
    return {type:DISLIKE_COMMENT,payload:id}
}