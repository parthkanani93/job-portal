import React from 'react';
import './App.css';
import Navigationbar from './component/Navbar.component';
import Carosal from './component/Carosal.component'


function App(props) {


  return (
    <div className="App">

      <Navigationbar />
      <div>
      <Carosal/>
      </div>
      
      


    </div>
  );
}

export default App;
