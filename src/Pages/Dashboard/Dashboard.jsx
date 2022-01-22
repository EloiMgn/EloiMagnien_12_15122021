import { useParams } from 'react-router-dom';
import  useFetch  from '../../utils/utils';

import './Dashboard.scss';
import DashboardHeader from '../../Components/DashboardHeader/DashboardHeader';
import Header from '../../Components/Header/Header';
import VerticalNav from '../../Components/VerticalNav/VerticalNav';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import KeyDatas from '../../Components/KeyDatas/KeyDatas';
import MainDatas from '../../Components/MainDatas/MainDatas';

/**
 * Return react component Dashboard based on user's id 
 * @returns { JSX.Element } 
 */
const Dashboard = () => {

  const { id, name } = useParams();

  const { isLoading, error } = useFetch(`/user/${id}`);

  if (id){
    if(isLoading) {
      return (
      <div className='loadingPage'>
      <Loading />
    </div>
      );
    } if(error) {
      return (
        <div className='ErrorPage'>
        <Error />
      </div>
        );
    }
      return (
        <div className='mainDiv'>
          <Header id={id} name={name}/>
          <div className='mainDiv__inner'>
            <VerticalNav id={id} name={name}/>
            <div className="dashboard">
              <DashboardHeader userId={id}/>
              <div className='dashboard__datas'>
                <MainDatas 
                userId={id}
                />
                <KeyDatas 
                userId={id}
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