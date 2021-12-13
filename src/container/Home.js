import React from 'react';
import NavAside from '../components/NavAside';
import BeerList from './BeerList';

const Home = () => {
  return (
    <div className="d-flex justify-content-around mt-100">
      <div className="nav-aside">
        <NavAside />
      </div>
      <div>
        <BeerList />
      </div>
    </div>
  )
}

export default Home;