import React, {Component} from 'react'
import Typed from 'typed.js'
import './styles/typedString.css'

class TypedString extends Component {
  componentDidMount() {
    const options = {
      strings: [
        'Software Engineer', 'Full-Stack Developer', 'Front End Developer', 'Web Designer'
      ],
      typeSpeed: 50,
      backSpeed: 50
    }

    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
   // Make sure to destroy Typed instance on unmounting
   // to prevent memory leaks
   this.typed.destroy()
 }

  render() {
    return (
      <div>
      <span ref={(el) => {
          this.el = el
        }}/>
    </div>)
  }
}

export default TypedString
