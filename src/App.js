
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter , Route , Switch} from 'react-router-dom'

import Navigation from './comp/Navigation';

import Features from './comp/Features';


function App() {
  const teamarr=[
      {
        name:"mukul"

      },
      {
        name:"akhil"
      },
      {
        name:"vikas"

      },
      {
        name:"akash"
      },
  ]
  return (
    <BrowserRouter>
      <div>
        <Navigation />
       

        <Features />
       
      </div>
    </BrowserRouter>
  );
}

export default App;
