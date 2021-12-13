import React from 'react';
import NavAside from '../components/NavAside';
import BeerList from './BeerList';

const Home = () => {
  return (
    <div>
      <div>
        <NavAside />
      </div>
      <div>
        <BeerList />
      </div>
    </div>
  )
}

export default Home;