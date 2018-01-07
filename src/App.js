import React from 'react';
import Header from './header/Header';
import NavBar from './header/components/NavBar';
import { Button } from 'reactstrap';

class App extends React.Component {
  render() {
    return (
    <div>
      <Header/>
      <Button color="danger">Danger!</Button>
    </div>);
  }
}
export default App;
