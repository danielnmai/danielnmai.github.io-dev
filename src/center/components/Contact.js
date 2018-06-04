import React, { Component } from 'react'
import { observer } from 'mobx-react';
import '../styles/contact.css';

@observer
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
            <form onSubmit={this.handleSubmit}>            
                <input className='form-input' type='text' name='name' placeholder="Name" value={this.state.name} onChange={(e) => this.handleNameChange(e)} />
                <input className='form-input' type='text' name='email' placeholder="Email" value={this.state.email} onChange={(e) => this.handleEmailChange(e)} />
                <textarea className='form-input' type='text' name='message' placeholder="Message" value={this.state.message} onChange={(e) => this.handleMessageChange(e)} />
              <input className='form-input' id='submit-button' type='submit' value='Send Message' />
            </form>
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
