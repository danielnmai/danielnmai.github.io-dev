import React from 'react';
import NavBar from './NavBar';
import TypedString from './TypedString';
import './styles/landing.css';


const Landing = (props) => {
  return (
    <header>
      <NavBar />
    <div className="title">
      <TypedString />
      <h2>Web Developer</h2>
    </div>
  </header>
  );
};

export default Landing;
