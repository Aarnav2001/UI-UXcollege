import './App.css';
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';

import Login from './pages/Login';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Profiles from './pages/Profiles';

function App() {
  return (
    <div className="App">
      <div>
          <Navbar/>
          <div  class="">
          <Switch>
            <Route exact path='/'><Login/></Route>
            <Route path='/home'><Home/></Route>
            <Route path='/browse'><Browse/></Route>
            <Route path='/profiles'><Profiles/></Route>
        </Switch>
      </div>
      </div>
    </div>
  );
}

export default App;
