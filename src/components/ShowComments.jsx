import { Flex } from '@chakra-ui/react';
import React, { useReducer } from 'react'
import CommentChild from './CommentChild';
const uuid= require("uuid").v4;

const ShowComments = ({comments}) => {
  return (
    <>
    <Flex flexDir={"column"} ml="0.2rem" gap={2}>
        {
            comments&&comments.length>0&&comments.map((el)=>{
                return <CommentChild key={uuid()} {...el} />
            })
        }
    </Flex>
    </>
  )
}

export default ShowComments