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
