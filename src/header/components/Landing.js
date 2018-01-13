import React from 'react';
import NavBar from './NavBar';
import TypedString from './TypedString';
import './styles/landing.css';


const Landing = (props) => {
  return (
    <header>
      <NavBar />
    <div className="title">
      <h1>Daniel Mai</h1>
      <TypedString />
    </div>
  </header>
  );
};

export default Landing;
