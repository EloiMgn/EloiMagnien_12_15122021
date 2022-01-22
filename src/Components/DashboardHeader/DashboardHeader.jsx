import PropTypes from 'prop-types';
import './DashboardHeader.scss';
import  useFetch  from '../../utils/utils';

/**
 * Return react component DashboardHeader depending on the user's name
 * @param { string } userFirstName 
 * @returns { JSX.Element } 
 */
const DashboardHeader = ({userId}) => {
  const { data } = useFetch(`/user/${userId}`);
  if (data.data) {
    return (
      <div className='dashboardHeader'>
            <h1 className="dashboardHeader__hello" >Bonjour <strong className="dashboardHeader__hello-name">{data.data.userInfos.firstName}</strong></h1>
            <h2 className="dashboardHeader__congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
          </div>
    );
  } return null;
};

DashboardHeader.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardHeader;