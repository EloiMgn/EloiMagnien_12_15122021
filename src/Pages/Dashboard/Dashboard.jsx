import './Dashboard.scss';
import DashboardHeader from '../../Components/DashboardHeader/DashboardHeader';
import Example from '../../Components/Weight/Weight';

const Dashboard = function() {

  return (
    <div className="Dashboard">
      <DashboardHeader userFirstName='Thomas'/>
      <Example />
    </div>
  );
};

export default Dashboard;