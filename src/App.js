import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Bnner from './BANNER/Bnner';
import Rowpost from './ROWPOST/Rowpost';
import{action,horror,orginals} from './urls'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Bnner/>
      <Rowpost url={orginals} title='Netflix orginals'/>
      <Rowpost  url={action} title='Action' issmall/>
      <Rowpost  url={horror} title='horror' issmall/>

      
    </div>
  );
}

export default App;
