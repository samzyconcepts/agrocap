import { Routes, Route } from 'react-router';
import './App.css';
import Landingpage from './pages/index/Landingpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landingpage/>} />
    </Routes>
  );
}

export default App;
