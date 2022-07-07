import './App.css'
import { Routes, Route } from 'react-router-dom';
import StarshipList from "./pages/StarshipList";
import StarshipDetails from './pages/StarshipDetails';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starships" element={<StarshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
