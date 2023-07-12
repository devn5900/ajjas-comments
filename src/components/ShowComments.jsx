import { Flex } from '@chakra-ui/react';
import React, { useReducer } from 'react'
import CommentChild from './CommentChild';

const ShowComments = ({comments}) => {
  return (
    <>
    <Flex flexDir={"column"} ml="0.2rem">
        {
            comments&&comments.length>0&&comments.map((el)=>{
                return <CommentChild key={el?.id} {...el} />
            })
        }
    </Flex>
    </>
  )
}

export default ShowComments