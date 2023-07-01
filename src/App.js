import { Routes, Route } from 'react-router';

// Pages
import Landingpage from './pages/index/Landingpage';
import Form from './pages/registration/Form';

// CSS
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landingpage/>} />
      <Route path='/form' element={<Form/>} />
    </Routes>
  );
}

export default App;
