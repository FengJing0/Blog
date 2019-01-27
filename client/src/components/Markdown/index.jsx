import React from 'react'
import marked from 'marked'

function mark (data) {
  if(!data){
    return '加载中...'
  }
  const renderer = new marked.Renderer()
  renderer.blockquote = (quote) => {
    return `<blockquote>${quote}</blockquote>`
  }
  return marked(data, {
    renderer
  })
}

const Markdown = props => {
  const {md} = props
  const content = mark(md)
  console.log(content)
  return (
      <div dangerouslySetInnerHTML={{__html:content||'加载中...'}}/>
  )
}

export default Markdown