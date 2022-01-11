import PropTypes from 'prop-types';
import './DashboardHeader.scss';

/**
 * Return react component DashboardHeader depending on the user's name
 * @param { string } userFirstName 
 * @returns { HTMLElement } 
 */
const DashboardHeader = ({userFirstName}) => (
				<div className='dashboardHeader'>
          <h1 className="dashboardHeader__hello" >Bonjour <strong className="dashboardHeader__hello-name">{userFirstName}</strong></h1>
          <h2 className="dashboardHeader__congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
				</div>
  );

DashboardHeader.propTypes = {
  userFirstName: PropTypes.string,
};

DashboardHeader.defaultProps = {
  userFirstName: 'name',
};

export default DashboardHeader;