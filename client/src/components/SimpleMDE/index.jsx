import React,{PureComponent} from 'react'
import SimpleMDE from 'simplemde'


class MDE extends PureComponent{
  componentDidMount() {
    this.init()
  }

  componentWillUnmount() {
    this.mde=null
  }

  init = (config)=> {
    const {onChange,value} = this.props
    this.mde = new SimpleMDE({
      ...config,
      autoDownloadFontAwesome: true,
      element: this.mdeRef,
      initialValue: value
    })
    this.mde.codemirror.on('change', () => {
      onChange( this.mde.value())
    })
  }

  render() {
    return <textarea ref={mde => this.mdeRef = mde}/>
  }
}

export default MDE