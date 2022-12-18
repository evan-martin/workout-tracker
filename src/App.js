import { Route, Routes } from 'react-router';
import { useStrava } from './hooks/useStrava';
import Splash from './pages/splash';
import Activites from './pages/activities';
import './App.css';

function App() {

  const {
    error, isLoaded, data,
  } = useStrava();

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/activities' element={<Activites data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
