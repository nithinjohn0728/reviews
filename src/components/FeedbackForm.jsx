import React, { useState } from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'


const FeedbackForm = ({handleAdd}) => {
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(0)

    const handletextChange = (e) =>{
        if(text ===''){
            setBtnDisabled(true )
            setMessage(null)
        }if(text !=='' &&  text.trim().length <=10){
            
            setMessage("atleast 10 chars please")
    }else{
        setMessage(null)
        setBtnDisabled(false)

    }

        setText(e.target.value)

    }


    const handleSubmit = (e)=>{
        e.preventDefault()
        if(text.trim().length > 10 ){
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
        }
    }


    const handleSubmit= ()=>{

    }
  return (
   <Card>
       <form onSubmit={handleSubmit}>
           <h2>Please give a rating</h2>
           <RatingSelect select = {(rating) =>setRating(rating)}/>
           <div className="input-group">

               <input onChange={handletextChange} type="text" placeholder='review...' value = {text} />
               <Button type="submit" isDisbled ={btnDisabled}>send</Button>
           </div>
           (message && <div className='message'>
               {message}</div>)
       </form>
   </Card>
  )
}

export default FeedbackForm