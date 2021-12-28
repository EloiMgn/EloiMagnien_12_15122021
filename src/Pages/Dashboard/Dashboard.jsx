import { useState, useEffect } from 'react';
import './Dashboard.scss';
import DashboardHeader from '../../Components/DashboardHeader/DashboardHeader';
import MainDatas from '../../Components/MainDatas/MainDatas';
import KeyDatas from '../../Components/KeyDatas/KeyDatas';
import fetchMockedData from '../../utils/utils';

const Dashboard = ({id}) => {
const [user, setUser] = useState('');
const [activity, setActivity] = useState('');
const [sessions, setSessions] = useState('');


const fetchData = async() => {
const userData = await fetchMockedData(`/user/${id}`); 
const userActivity = await fetchMockedData(`/user/${id}/activity`);
const userSessions = await fetchMockedData(`/user/${id}/average-sessions`);
setUser(userData.data);
setActivity(userActivity.data.sessions);
setSessions(userSessions.data.sessions);
};

useEffect(() => {
  fetchData();
}, []);

if (user){
  return (
    <div className="dashboard">
      <DashboardHeader userFirstName={user.userInfos.firstName}/>
      <div className='dashboard__datas'>
      <MainDatas 
      userActivity={activity}
      userSessions={sessions}
      />
      <KeyDatas 
      keyDataCalories={user.keyData.calorieCount} 
      keyDataProtein={user.keyData.proteinCount} 
      keyDataLipids={user.keyData.lipidCount} 
      keyDataCarbohydrates={user.keyData.carbohydrateCount} 
      />
      </div>
    </div>
  );
}   return (
<div className="Dashboard">
      <DashboardHeader userFirstName="Eloi"/>
    </div>
);
};

export default Dashboard;