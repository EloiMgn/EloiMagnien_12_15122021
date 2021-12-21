import { useState, useEffect } from 'react';
import './Dashboard.scss';
import DashboardHeader from '../../Components/DashboardHeader/DashboardHeader';
import fetchMockedData from '../../utils/utils';

const Dashboard = (props) => {
const [user, setUser] = useState('');
const idx = props.id;

const fetchData = async() => {
const data = await fetchMockedData(`/user/${idx}`); 
setUser(data.data);
};

useEffect(() => {
  fetchData();
}, []);

if (user){
  return (
    <div className="Dashboard">
      <DashboardHeader userFirstName={user.userInfos.firstName}/>
    </div>
  );
}   return (
  <div className="Dashboard">
    ok
  </div>
);
};

export default Dashboard;