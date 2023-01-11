import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { useStrava } from './hooks/useStrava';
import { useUserData } from './hooks/useUserData';
import { useLocalStorage } from './hooks/useLocalStorage';
import Splash from './pages/splash';
import Activites from './pages/activities';
import ActivityDetail from './pages/activity-detail';
import Overview from './pages/overview';
import Loading from './components/loading';
import './App.css';

function App() {

  const {
    error, isLoaded, data, monthlyData, weeklyData
  } = useStrava();

  const { userData } = useUserData();

  const [activity, setActivity] = useLocalStorage([]);
  const [currentPage, setCurrentPage] = useState(1);

  if (!isLoaded) {
    return <Loading />
  } else if (error) {
    return <>{error}</>
  } else {

    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/activities' element={<Activites data={data} setActivity={setActivity} currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
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
