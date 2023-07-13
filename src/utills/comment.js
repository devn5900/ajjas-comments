// id:
// userName:"",
// comment:"",
// like:,
// dislike:,
// reply:
export function NewComment(id, userName, comment, like, dislike, reply) {
  const obj = { id, userName, comment, like, dislike, reply };
  return obj;
}

export const findAndAdd = (id, data, comments) => {
console.log(id,data,comments)
        const cmnt= comments.map((el)=>{
                return findData(el,id,data)
        })
        console.log(cmnt)
        return cmnt;
};

const findData = (el,id,data) => {
        if(el.id==id){
                el.reply.push(data);
                return el;
        }
             const replyData= el.reply.map((el)=>{
                        return findData(el,id,data);
                })
        return {...el,reply:replyData};

};


export const findAndLike=(id,comments)=>{
        // console.log('kl',id,comments);
        const cmnt= comments.map((el)=>{
                return findDataLike(el,id)
        })
        return cmnt;
}
const findDataLike = (el,id) => {
        if(el.id==id){
               el.like+=1
                return el;
        }
           const likeData=  el.reply.map((el)=>{
                        return findDataLike(el,id);
                })
        return {...el,reply:likeData};

};

export const disLikeData=(id,comments)=>{
        const cmnt= comments.map((el)=>{
                return findDataDisLike(el,id)
        })
        return cmnt;
}
const findDataDisLike = (el,id) => {
        if(el.id==id){
               el.dislike+=1
                return el;
        }
           const likeData=  el.reply.map((el)=>{
                        return findDataDisLike(el,id);
                })
        return {...el,reply:likeData};

};
