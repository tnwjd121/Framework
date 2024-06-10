import React from 'react'
import { useColors } from '../ColorProvider'
import { FaStar } from 'react-icons/fa'

const Star = ({selected=false, onSelect=f=>f})=>{
  const {onRate} = useColors()
  return(
    <FaStar color={selected?"red":"gray"} onClick={onRate()}/>
  )
}

