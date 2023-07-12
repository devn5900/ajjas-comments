
// id:
// userName:"",
// comment:"",
// like:,
// dislike:,
// reply:
export function NewComment(id,userName,comment,like,dislike,reply){
        
        const obj={id,userName,comment,like,dislike,reply};
        return obj;
}

export const findAndAdd=(id,data,state)=>{
        console.log(id,data,state);
        const arr=state
        for(let i=0;i<arr.length;i++){
             if(arr[i].id==id){
                arr[i].reply.push(data);
                return arr;
             }
             else{
               state.reply= findAndAdd(id,data,arr[i].reply);
             }
        }
        return state;
}

const findData=()=>{

}