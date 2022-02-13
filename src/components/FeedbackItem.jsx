import React from 'react'
import { useState } from 'react';
import Card from './shared/Card';
import {FaTimes} from 'react-icons/fa'


const FeedbackItem = ({item,handleDelete}) => {

    const [rating, setRating] = useState(0)
    const [text, setText] = useState('a')

    // const handleClick = () =>{
    //     setRating((p)=>{
    //         return p+1
    //     })
    // } 

  const handleClick = ()=>{

  }
  return (
   
        <Card reverse ={ true}>
        <div className="num-display">{rating}</div>
        <button onClick={()=>handleDelete(item.id)} className='close'>
           <FaTimes color = 'purple'/> 
        </button>
        <div className="text-display">{text}</div>
      
        </Card>
  )
}

export default FeedbackItem