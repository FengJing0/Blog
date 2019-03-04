import React from 'react'
import {Tag as AntTag} from "antd"

const Tag = props => {
  const {type,margin} = props
  const marginLeft = margin || 10
  if(type){
    if(type instanceof Array){
      return type.map(item => <AntTag key={item.id} style={{marginLeft}}>{item.name}</AntTag>)
    }
    if(type instanceof Object){
      return <AntTag style={{marginLeft}}>{type.name}</AntTag>
    }
  }
  return null
}

export default Tag
