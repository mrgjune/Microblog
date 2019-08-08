import React from 'react';
//import NavBar from './NavBar';
import Routes from './Routes';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
class App extends React.Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
