import React from 'react';
import Header from './header/Header';
import Center from './center/Center';
import Footer from './footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Center />
        <Footer />
    </div>
  )
  }
}
export default App;
