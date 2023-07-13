import React, { useState } from 'react'
import {Box,Textarea,Input, Flex, Button} from "@chakra-ui/react"
import { NewComment } from '../utills/comment'
import { useDispatch } from 'react-redux'
import { addNewComment } from '../redux/comment/action'
import { useSelector } from 'react-redux';
import ShowComments from './ShowComments'
const uuid= require("uuid").v4;
const Form = () => {
  const dispatch= useDispatch();
  const {comments}= useSelector((store)=>store.CommentReducer);
  console.log(comments)
  const [input,setInput]= useState("");
  // const 
  const handleSubmit=(e)=>{
    e.preventDefault();
    const newComment= new NewComment(uuid(),"Devesh Mishra",input,0,0,[])
    dispatch(addNewComment(newComment));
  }
  return (
    <Flex mt='1.5rem' flexDir={"column"} justifyContent={'center'} >
        <Box w={"30%"} m='auto'>
            <form onSubmit={handleSubmit}>
              <Flex gap='2'>
            <Textarea placeholder='Write a Comment here..' onChange={(e)=>setInput(e.target.value)} />
            <Button type="submit" m='0.5rem' colorScheme='blue'>Comment</Button>
              </Flex>
            </form>
        </Box>
        <Box w={"70%"} m="auto">
          <ShowComments comments={comments}/>
        </Box>
    </Flex>
  )
}

export default Form