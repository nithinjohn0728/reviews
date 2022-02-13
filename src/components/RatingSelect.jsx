import React, { useState } from 'react'


const RatingSelect = () => {
    const [selected, setSelected] = useState(1)

    const handleChange  = (e )=>{
   setSelected(+e.currentTarget.value) 
   select(+e.currentTarget.value)
  }
  return (
    
  )
}

export default RatingSelect