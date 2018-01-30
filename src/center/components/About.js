import React, {Component} from 'react';
import '../styles/about.css';
import ProfilePic from '../styles/images/profile_pic.jpg';

class About extends Component {
  render() {
    return (<div className='about'>
      <div className='bio'>
        <h1>About</h1>
        <p>I am a Software Developer with computer science degree and experience with both hardware and software technologies. I have a true passion for solving human problems. In the past, I achieved this through providing hardware solutions. In the present, I write elegant code to make Internet a better place for people.</p>

        <h1>Skills</h1>
        <div className='skills'>
          <div className='skill-item'>
            <h3>Languages</h3>
            <ul>
              <li>Javascript</li>
              <li>Ruby</li>
              <li>Java</li>
              <li>HTML5/CSS3</li>
            </ul>
          </div>
          <div className='skill-item'>
            <h3>Frameworks/ Libraries</h3>
            <ul>
              <li>React-Redux</li>
              <li>Rails</li>
              <li>Material-UI</li>
              <li>Node.js</li>
            </ul>
          </div>

          <div className='skill-item'>
            <h3>Database</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>ActiveRecord</li>
            </ul>
          </div>
          <div className='skill-item'>
            <h3>Other</h3>
            <ul>
              <li>Git/Github</li>
              <li>Heroku</li>
              <li>webpack</li>
              <li>AJAX</li>
              <li>RESTful APIs</li>
              <li>JSX</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='profile_pic'>
        <img src={ProfilePic}></img>
      </div>
    </div>)
  }
}

export default About;
