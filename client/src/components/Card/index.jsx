import React from 'react'
import {Card} from "antd"


import {Title,Gist,Date,Type} from "./style"

const getType = type => {
  if(type){
    return <Type>&nbsp;&nbsp;&nbsp;&nbsp;{type.name}</Type>
  }
}

const CardComponent = props => {
  const {title,gist,date,type} = props
  return (<Card hoverable bodyStyle={{padding:20}}>
    <Title>{title}{getType(type)}</Title>
    <Gist>{gist}</Gist>
    <Date>{date}</Date>
  </Card>)
}

export default CardComponent