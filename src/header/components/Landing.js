import React from 'react';
import NavBar from './NavBar';
import './styles/landing.css';


const Landing = (props) => {
  return (
    <header>
      <NavBar />
    <div className="title">
      <h1>Daniel Mai</h1>
      <h2>Web Developer</h2>
    </div>
  </header>
  );
};

export default Landing;
