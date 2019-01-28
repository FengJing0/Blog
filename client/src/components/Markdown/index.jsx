import React from 'react'
import marked from 'marked'

function mark (data) {
  if(!data){
    return
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
  return (
      <div className="markdown-body" dangerouslySetInnerHTML={{__html:mark(md)||'加载中...'}}/>
  )
}

export default Markdown