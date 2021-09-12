import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Navbar/Hero';
import Meals from './components/Meals';
import { mealData, mealDataTwo } from './components/Meals/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Meals heading='Pick anyone boss' data={mealData} />
      <Feature  />
      <Meals heading='Variety of Drinks' data={mealDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
