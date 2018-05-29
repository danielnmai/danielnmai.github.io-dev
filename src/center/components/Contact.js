import React, { Component } from 'react'
import '../styles/contact.css';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('form is submitted')
    console.log(this.state)

  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }
  render() {
    return (
      <div className='contact'>
        <h1>Contact</h1>
        <div className='body'>
          <div className='form'>
            <form onSubmit={this.handleSubmit}>
              <div>
                <input type='text' name='name' placeholder="Name" value={this.state.name} onChange={(e) => this.handleNameChange(e)} />
              </div>
              <div>
                <input type='text' name='email' placeholder="Email" value={this.state.email} onChange={(e) => this.handleEmailChange(e)} />
              </div>
              <div>
                <textarea type='text' name='message' placeholder="Message" value={this.state.message} onChange={(e) => this.handleMessageChange(e)} />
              </div>
              <input class='input-button' type='submit' value='Send Message' />
            </form>
          </div>
          <div className='info'>
            <h3>Daniel Mai</h3>
            <p> Milpitas, California</p>
            <p> danielmai1728@gmail.com </p>
          </div>
        </div>
      </div>


    )
  }
}

export default Contact
