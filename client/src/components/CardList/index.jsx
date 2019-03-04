import React from 'react'
import {Link} from "react-router-dom"


import {PagesWrapper,Title} from "../../style/common_style"
import Card from "../Card"

const CardList = props => {
  const {title,list,id} = props
  if(title === 'Collections'){
    return (
        <PagesWrapper id={id} className='b-mb' padding='0'>
          {title&&<Title>{title}</Title>}
          {
            list.map(item=>(<a key={item.id} href={item.url} target='_blank' rel='noopener noreferrer'>
              <Card title={item.title} gist={item.summary} type={item.category}/>
            </a>))
          }
        </PagesWrapper>
    )
  }
  return (
      <PagesWrapper id={id} className='b-mb' padding='0'>
        {title&&<Title>{title}</Title>}
        {
          list.map(item=>(<Link key={item.id} to={`/Detail/${title}/${item.id}`}>
            <Card title={item.title} gist={item.gist} date={item.create_time} type={item.category}/>
          </Link>))
        }
      </PagesWrapper>
  )
}

export default CardList