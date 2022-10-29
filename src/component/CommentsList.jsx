import React from 'react'
import SingleComment from './SingleComment'

function CommentsList() {
  return (
    <div className='commentList'>
        <SingleComment />
        <SingleComment />
        <SingleComment />
        <SingleComment />
    </div>
  )
}

export default CommentsList