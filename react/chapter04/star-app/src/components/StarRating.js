//src/components/StarRating.js
import React from 'react'
import Star from "./Star.js"

const createArray = length=>[...Array(length)]
/* 상태가 없는 컴포넌트를 순수 컴포넌트라고 합니다 */

export default function StarRating({totalStars=5, selectedStars=0, onRate=f=>f}){
  return(
    <div>
      {createArray(totalStars).map((n,i)=>
      <Star 
        key={i} 
        selected={selectedStars>i}
        onSelect={()=>{onRate(i+1)}}
      />)}
      <p className="star-text">{selectedStars} of {totalStars} stars</p>
    </div>
    )
  }

  
  