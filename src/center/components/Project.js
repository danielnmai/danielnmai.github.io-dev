import React, { Component } from 'react';
import '../styles/project.css';
import mBudget from '../styles/images/mbudget_sc.png';
import eCommerce from '../styles/images/ecommerce.png';
import heroku from '../styles/images/heroku.png';
import github from '../styles/images/github.png';


class Project extends Component {
  render() {
    return (
      <div className='project'>
        <h1>Portfolio</h1>
        <h2>Check out some of projects I've done.</h2>
        <h3>The Heroku link will take some time to load, please be patient!</h3>
     <div className='grid-container'>
          <div className='item 1'>
            <img className='snapshot' src={mBudget}></img>
            <a href='https://github.com/danielnmai/budget-webclient' target='_blank'><img className='logo' src={github}></img></a>
            <a href='http://mbudget.herokuapp.com/' target='_blank'><img className='logo' src={heroku}></img></a>
          </div>
          <div className='item 2'>
            <img className='snapshot' src={eCommerce}></img>
            <a href='https://github.com/danielnmai/mini-capstone' target='_blank'><img className='logo' src={github}></img></a>
            <a href='https://e-commerce-mini-app.herokuapp.com/' target='_blank'><img className='logo' src={heroku}></img></a>

          </div>
        </div>
      </div>
    )
  }
}

export default Project;
