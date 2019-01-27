import React from 'react'
import {Link} from "react-router-dom"


import {PagesWrapper,Title} from "../../style/common_style"
import Card from "../Card"

const CardList = props => {
  const {title,list} = props
  return (
      <PagesWrapper className='b-mb' padding='0'>
        {title&&<Title>{title}</Title>}
        {
          list.map(item=>(<Link key={item.id} to={`/Detail/${title}/${item.id}`}>
            <Card title={item.title} gist={item.gist} date={item.date}/>
          </Link>))
        }
      </PagesWrapper>
  )
}

export default CardList