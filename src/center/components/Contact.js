import React, { Component } from 'react'
import '../styles/contact.css';

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('error after 2s!')
  }, 2000)
})

let doOne = (text) => {
  console.log(text)
  return 'do second thing'
}

let doTwo = (text) => {
  console.log(text)
}

let doSomething = new Promise((resolve, reject) => {
  reject('we do something!')
})

doSomething.then(result => doOne(result)).then(secondResult => doTwo(secondResult))

promise.then(succesMsg => {
  console.log('Yahy!' + succesMsg)
})
class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {name: '', email: '', message: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event){
    event.preventDefault()
    console.log('fom is submitted')
    console.log(this.state)

  }
  handleNameChange(event) {
   this.setState({name: event.target.value});
 }
  handleEmailChange(event) {
   this.setState({email: event.target.value});
 }
  handleMessageChange(event) {
   this.setState({message: event.target.value});
 }
  render(){
    return (
      <div className='contact'>
          <h1>Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input type='text' name='name' value={this.state.name} onChange={(e) => this.handleNameChange(e)} />
          </div>
          <div>
            <label>Email</label>
            <input type='text' name='email' value={this.state.email} onChange={(e) => this.handleEmailChange(e)}/>
          </div>
          <div>
            <label>Message</label>
            <textarea type='text' name='message' value={this.state.message} onChange={(e) => this.handleMessageChange(e)} />
          </div>
          <input type='submit' value='Send Message' />
        </form>

      </div>
    )
  }
}

export default Contact
