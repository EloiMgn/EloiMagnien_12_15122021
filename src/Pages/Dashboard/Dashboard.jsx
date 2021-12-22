import { useState, useEffect } from 'react';
import './Dashboard.scss';
import DashboardHeader from '../../Components/DashboardHeader/DashboardHeader';
import Weight from '../../Components/Weight/Weight';
import fetchMockedData from '../../utils/utils';

const Dashboard = ({id}) => {
const [user, setUser] = useState('');
const [activity, setActivity] = useState('');


const fetchData = async() => {
const userData = await fetchMockedData(`/user/${id}`); 
const userActivity = await fetchMockedData(`/user/${id}/activity`);
setUser(userData.data);
setActivity(userActivity.data.sessions);
};

useEffect(() => {
  fetchData();
}, []);

if (user){
  return (
    <div className="Dashboard">
      <DashboardHeader userFirstName={user.userInfos.firstName}/>
      <Weight userActivity={activity}/>
    </div>
  );
}   return (
<div className="Dashboard">
      <DashboardHeader userFirstName="Eloi"/>
    </div>
);
};

export default Dashboard;