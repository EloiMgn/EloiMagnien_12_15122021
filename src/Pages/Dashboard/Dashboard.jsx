import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Dashboard.scss';
import DashboardHeader from '../../Components/DashboardHeader/DashboardHeader';
import MainDatas from '../../Components/MainDatas/MainDatas';
import KeyDatas from '../../Components/KeyDatas/KeyDatas';
import fetchMockedData from '../../utils/utils';
import Welcome from '../Welcome/Welcome';
import Header from '../../Components/Header/Header';
import VerticalNav from '../../Components/VerticalNav/VerticalNav';

const Dashboard = () => {
  const [user, setUser] = useState('');
  const [activity, setActivity] = useState('');
  const [sessions, setSessions] = useState('');
  const [perfs, setPerfs] = useState('');

  const { id } = useParams();

  const fetchData = async() => {

    const regex= /[0-9]+/;
   if(id.search(regex) >= 0) {
     const userData = await fetchMockedData(`/user/${id}`); 
     const userActivity = await fetchMockedData(`/user/${id}/activity`);
     const userSessions = await fetchMockedData(`/user/${id}/average-sessions`);
     const userPerfs = await fetchMockedData(`/user/${id}/performance`);
         setUser(userData.data);  
         setActivity(userActivity.data.sessions);
         setSessions(userSessions.data.sessions);
         setPerfs(userPerfs.data);
   } 
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (user){
      return (
        <div>
          <Header id={id}/>
        <div className='mainDiv'>
          <VerticalNav id={id}/>
        <div className="dashboard">
          <DashboardHeader userFirstName={user.userInfos.firstName}/>
          <div className='dashboard__datas'>
          <MainDatas 
          userActivity={activity}
          userSessions={sessions}
          userPerfs={perfs}
          userScore={user.score}
          />
          <KeyDatas 
          keyDataCalories={user.keyData.calorieCount} 
          keyDataProtein={user.keyData.proteinCount} 
          keyDataLipids={user.keyData.lipidCount} 
          keyDataCarbohydrates={user.keyData.carbohydrateCount} 
          />
          </div>
        </div>
        </div>
        </div>
      );
    } return (
      <div className='welcomePage'>
        <Welcome />
      </div>
    );
};

export default Dashboard;