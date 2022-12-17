import { Route, Routes } from 'react-router';
import Splash from './pages/splash';
import Activites from './pages/activities';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path='/activities' element={<Activites />} />
      </Routes>
    </div>
  );
}

export default App;
