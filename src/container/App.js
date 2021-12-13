import Navbar from '../components/Navbar';
import { Route, Routes } from 'react-router';
import Home from './Home';
import BeerPage from './BeerPage';
import '../assets/styles/App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route path="/Beer" element={<BeerPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
