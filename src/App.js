import React from 'react';

import './App.css';

import Error from './pages/Error';
import Home from './pages/Home';
import Pets from './pages/Pets';
import SinglePet from './pages/SinglePet';
import Form from './components/Form';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Form />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pets" component={Pets} />
        <Route exact path="/pets/:slug/" component={SinglePet} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
