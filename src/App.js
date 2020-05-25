import React from 'react';
import './App.css';
import Navigationbar from './component/Navbar.component';
import Carosal from './component/Carosal.component';
import Dashboard from './component/dashboard.component';


function App(props) {


  return (
    <div className="App">

      <Navigationbar />
      <Carosal/>
      <Dashboard/>
      
      


    </div>
  );
}

export default App;
