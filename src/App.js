import { Route, Routes } from 'react-router';
import Splash from './pages/splash';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
    </div>
  );
}

export default App;
