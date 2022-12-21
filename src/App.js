import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { useStrava } from './hooks/useStrava';
import Splash from './pages/splash';
import Activites from './pages/activities';
import ActivityDetail from './pages/activity-detail';
import './App.css';

function App() {

  const {
    error, isLoaded, data,
  } = useStrava();

  const [activity, setActivity] = useState([]);

  if (!isLoaded) {
    return <>LOADING</>
  } else if (error) {
    return <>{error}</>
  } else {

    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/activities' element={<Activites data={data} setActivity={setActivity}/>} />
          <Route path="/activities/:id" element={<ActivityDetail activity={activity} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
