import React, { Component } from 'react';
import '../styles/about.css';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='bio'>
          <h1>About</h1>
          <h2>Hello!</h2>
          <p>I am a Software Developer with computer science degree and experience with both hardware and software technologies. I have a true passion for solving human problems. In the past, I achieved this through providing hardware solutions. In the present, I write elegant code to make Internet a better place for people.</p>
        </div>
        <div className='profile_pic'>
          <p>This is my picture!</p>
        </div>
      </div>
    )
  }
}

export default About;
