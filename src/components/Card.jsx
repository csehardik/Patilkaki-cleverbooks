import { InsertEmoticon } from '@mui/icons-material'
import React from 'react'

const Card = ({image,text,para}) => {
  return (
    <div className=" bg-purple-100 p-8 rounded-2xl space-y-4">
      <img className="h-12 mb-4" src={image} />
      <span className="font-bold text-xl">{text}</span>
      <p className="text-gray-700">{para}</p>
    </div>
  )
}

export default Card
