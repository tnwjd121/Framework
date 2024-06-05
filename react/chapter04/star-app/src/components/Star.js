import React from 'react'
import { FaStar } from 'react-icons/fa';

const Star = ({selected=false, onSelect=f=>f})=>{
  return(
    <FaStar color={selected?"red":"gray"} size="3em" onClick={onSelect}/>
  )
}



export default Star;