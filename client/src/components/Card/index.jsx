import React from 'react'
import {Card} from "antd"


import {Title,Gist,Date} from "./style"


const CardComponent = props => {
  const {title,gist,date} = props
  return (<Card hoverable bodyStyle={{padding:20}}>
    <Title>{title}</Title>
    <Gist>{gist}</Gist>
    <Date>{date}</Date>
  </Card>)
}

export default CardComponent