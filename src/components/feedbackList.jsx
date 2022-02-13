import React from 'react'
import FeedbackItem from './FeedbackItem'

const feedbackList = ({}) => {

    if(!feedback || feedback.length<1){
       return <p>No feedback available</p>
    }
  return (
    <div className='feedback-list'>

        {feedback.map((item)=>(
         <FeedbackItem key = {item.id} item = {item}
         handleDelete = {(id)=>}/>
        ) )}
       
    </div>
  )
}

export default feedbackList