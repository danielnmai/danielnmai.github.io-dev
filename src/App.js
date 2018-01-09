import React from 'react';
import Header from './header/Header';
import NavBar from './header/components/NavBar';
import { Button } from 'reactstrap';
import '../styles/index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="tiledBackground"></div>      
          <div>
            <Header/>
          </div>

      </div>

    )
  }
}
export default App;
