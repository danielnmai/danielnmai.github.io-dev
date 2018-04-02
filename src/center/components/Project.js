import React, { Component } from 'react';
import '../styles/project.css';
import mBudget from '../styles/images/mbudget_sc.png';
import eCommerce from '../styles/images/ecommerce.png';

class Project extends Component {
  render() {
    return (
      <div className='project'>
        <h1>Portfolio</h1>
        <h2>Check out some of my stuff!</h2>
        <div className='grid-container'>
          <div className='item 1'>
            <img src={mBudget}></img>
            <a href='https://github.com/danielnmai/budget-webclient' target='_blank'>Github</a>
            <a href='http://mbudget.herokuapp.com/' target='_blank'> Heroku</a>
          </div>

          <div className='item 2'>
            <img src={eCommerce}></img>
            <a href='https://e-commerce-mini-app.herokuapp.com/' target='_blank'>Heroku</a>
            <a href='https://github.com/danielnmai/mini-capstone' target='_blank'>Github</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
