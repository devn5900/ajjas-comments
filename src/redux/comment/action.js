import { ADD_NEW_CMNT, ADD_REPLY } from "./actionType"


export const addNewComment=(data)=>{
    return {type:ADD_NEW_CMNT,payload:data}
}

export const addReply=(id,data)=>{
    return {type:ADD_REPLY,payload:{id,data}};
}