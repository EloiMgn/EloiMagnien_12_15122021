import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './Dashboard.scss';
import DashboardHeader from '../../Components/DashboardHeader/DashboardHeader';
import MainDatas from '../../Components/MainDatas/MainDatas';
import KeyDatas from '../../Components/KeyDatas/KeyDatas';
import fetchData from '../../utils/utils';

import Header from '../../Components/Header/Header';
import VerticalNav from '../../Components/VerticalNav/VerticalNav';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';

/**
 * Return react component Dashboard based on user's id 
 * @returns { JSX.Element } 
 */
const Dashboard = () => {
  const [user, setUser] = useState('');
  const [activity, setActivity] = useState('');
  const [sessions, setSessions] = useState('');
  const [perfs, setPerfs] = useState('');
  const [error, setError] = useState(false);

  const { id, name } = useParams();

  /**
   * Check if "id" is valid, launch fetch datas from API and set states values
   * @returns { void } 
   */
  const launchFetchData = async() => {
   if(id) {
     const userData = await fetchData(`/user/${id}`); 
     const userActivity = await fetchData(`/user/${id}/activity`);
     const userSessions = await fetchData(`/user/${id}/average-sessions`);
     const userPerfs = await fetchData(`/user/${id}/performance`);
         setUser(userData.data);  
         setActivity(userActivity.data.sessions);
         setSessions(userSessions.data.sessions);
         setPerfs(userPerfs.data);
   } 
  };

  useEffect(() => {
    setError(false);
    launchFetchData();
  }, [id]);

  useEffect(() => {
    if(user){
      if(user.userInfos.firstName !== name){
        setError(true);
      }
    }
  }, [user]);

  if (user){
    if (error) {
      return <Error />; 
    }
      return (
        <div className='mainDiv'>
          <Header id={id} name={name}/>
          <div className='mainDiv__inner'>
            <VerticalNav id={id} name={name}/>
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
    } 
    return (
      <div className='loadingPage'>
        <Loading />
      </div>
    );
};

export default Dashboard;