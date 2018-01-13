import React, { Component } from 'react'
import Typed from 'typed.js'

class TypedString extends Component {
  componentDidMount(){
    const options = {
      strings:['first string', 'second string'],
      typeSpeed: 40
    }
    this.typed = new Typed(this.el, options)
  }

  render() {
    return (
      <div>
        <span
             style={{ whiteSpace: 'pre' }}
             ref={(el) => { this.el = el; }}
           />
      </div>

    )
  }
}

export default TypedString
