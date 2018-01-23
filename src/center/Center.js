import React, { Component } from 'react';
import About from './components/About';
import Project from './components/Project';
import './styles/center.css';

class Center extends Component {
  render() {
    return (
      <div className='center'>
        <About />
        <Project />
      </div>

    )


  }
}

export default Center;
