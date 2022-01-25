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
import mockedDatas from '../../utils/Assets/Datas/mockedDatas.json';

/**
 * Return react component Dashboard based on user's id 
 * @returns { JSX.Element } 
 */
const Dashboard = () => {
  const [user, setUser] = useState('');
  const [activity, setActivity] = useState('');
  const [sessions, setSessions] = useState('');
  const [perfs, setPerfs] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
     setLoading(false);
     setError(503);
         setUser(userData.data);  
         setActivity(userActivity.data.sessions);
         setSessions(userSessions.data.sessions);
         setPerfs(userPerfs.data);
      } 
    };
    
    useEffect(() => {
      setError(null);
      launchFetchData();
    }, [id]);



  useEffect(() => {
    if(user){
      if(user.userInfos.firstName !== name){
        setError(404);
        setLoading(false);
      }
    }
  }, [user]);

  if (user){
    if (error === 404) {
      return <Error error={error}/>; 
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
    if(mockedDatas.userDatas.id.toString() === id) {
      return (
        <div className='mainDiv'>
          <Header id={id} name={name}/>
          <div className='mainDiv__inner'>
            <VerticalNav id={id} name={name}/>
            <div className="dashboard">
              <DashboardHeader userFirstName={mockedDatas.userDatas.userInfos.firstName}/>
              <div className='dashboard__datas'>
                <MainDatas 
                userActivity={mockedDatas.userDatas.userActivity.sessions}
                userSessions={mockedDatas.userDatas.userSessions.sessions}
                userPerfs={mockedDatas.userDatas.userPerformances}
                userScore={mockedDatas.userDatas.score}
                />
                <KeyDatas 
                keyDataCalories={mockedDatas.userDatas.keyData.calorieCount} 
                keyDataProtein={mockedDatas.userDatas.keyData.proteinCount} 
                keyDataLipids={mockedDatas.userDatas.keyData.lipidCount} 
                keyDataCarbohydrates={mockedDatas.userDatas.keyData.carbohydrateCount} 
                />
              </div>
            </div>
          </div>
        </div>
      );
    } if(loading) {
      return <Loading/>;
    } return <Error error={error}/>;
};

export default Dashboard;