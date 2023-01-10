import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { useStrava } from './hooks/useStrava';
import { useUserData } from './hooks/useUserData';
import Splash from './pages/splash';
import Activites from './pages/activities';
import ActivityDetail from './pages/activity-detail';
import Overview from './pages/overview';
import './App.css';

function App() {

  const {
    error, isLoaded, data, monthlyData, weeklyData
  } = useStrava();

  const { userData } = useUserData();

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
          <Route path='/activities' element={<Activites data={data} setActivity={setActivity} />} />
          <Route path="/activities/:id" element={<ActivityDetail activity={activity} />} />
          <Route path="/overview" element={
            <Overview
              userData={userData}
              monthlyData={monthlyData}
              weeklyData={weeklyData}
            />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
