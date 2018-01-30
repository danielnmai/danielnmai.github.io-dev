import React, { Component } from 'react';
import '../styles/project.css';
import mBudget from '../styles/images/mbudget_sc.png';

class Project extends Component {
  render() {
    return (
      <div className='project'>
        <h1>Portfolio</h1>
        <h2>Check out some of my stuff!</h2>
        <div className='grid-container'>
          <div className='item 1'>
            <img src={mBudget}></img>
            <div>Github</div>
          </div>

          <div className='item 2'>
            <img src={mBudget}></img>
            <div>Github</div>
          </div>

        </div>

      </div>
    )
  }
}

export default Project;
