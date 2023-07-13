import { Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import ShowComments from "./ShowComments";
import { useDispatch } from "react-redux";
import { addReply, dislikeComment, likeComment } from "../redux/comment/action";
import { NewComment } from "../utills/comment";
const uuid= require("uuid").v4;
const CommentChild = ({ id, userName, comment, like, dislike, reply }) => {
  const [toggle, setToggle] = useState(false);
  const dispatch= useDispatch();
  const [data,setData]= useState("");
  const handleSubmit=(e,id)=>{
    e.preventDefault();
    const newComment= new NewComment(uuid(),"Devesh Mishra",data,0,0,[])
   dispatch(addReply(id,newComment));
   setToggle(false);
  }
  const handleLike=(id)=>{
    console.log(id)
    dispatch(likeComment(id));
  }
  const handleDisklike=(id)=>{
    dispatch(dislikeComment(id))
  }
  return (
    <Box   p="1rem">
      <Flex gap="2" alignItems={"center"}>
        <Icon fontSize={"1.5rem"} as={FaUserCircle} />
        <Text fontSize={"md"} fontWeight={"bold"}>{userName}</Text>
      </Flex>
      <Box>
        <Flex>
          <Text fontSize={"1.3rem"}>{comment}</Text>
        </Flex>
        <Flex gap="2">
          <Text
            color={"#116897"}
            fontSize={"0.8rem"}
            fontStyle={"oblique"}
            cursor={"pointer"}
            onClick={()=>handleLike(id)}
          >
            Like {like}
          </Text>
          <Text
            onClick={()=>handleDisklike(id)}
            color={"#116897"}
            fontSize={"0.8rem"}
            fontStyle={"oblique"}
            cursor={"pointer"}
          >
            DisLike {dislike}
          </Text>
          <Text
            color={"#116897"}
            fontSize={"0.8rem"}
            fontStyle={"oblique"}
            cursor={"pointer"}
            onClick={() => setToggle(!toggle)}
          >
            Reply
          </Text>
        </Flex>
       {toggle&& <Box>
          <form onSubmit={(e)=>handleSubmit(e,id)}>
            <Flex gap="2" alignItems={'center'}>
              <Input type="text" placeholder="Reply..." onChange={(e)=>setData(e.target.value)} bg={"#D8EBEF"} />
              <Button type="submit" m='0.5rem' colorScheme='blue'>Reply</Button>
            </Flex>
          </form>
        </Box>}
        {reply&&reply.length>0&&<Box w={"90%"} 
        bg={"#DBDBDB"}><ShowComments comments={reply} /></Box>}
      </Box>
    </Box>
  );
};

export default CommentChild;
