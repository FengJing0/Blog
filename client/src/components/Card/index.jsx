import React from 'react'
import {Card} from "antd"
import Tag from '../../components/Tag'
import {Title,Gist,Date} from "./style"


const CardComponent = props => {
  const {title,gist,date,type} = props
  return (<Card hoverable bodyStyle={{padding:20}}>
    <Title>{title}<Tag type={type}/></Title>
    <Gist>{gist}</Gist>
    <Date>{date}</Date>
  </Card>)
}

export default CardComponent