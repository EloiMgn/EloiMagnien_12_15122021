/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './DashboardHeader.scss';

const DashboardHeader = function(props) {
  const name = props.userFirstName;

  return (
				<div className='dashboardHeader'>
          <h1 className="dashboardHeader__hello" >Bonjour <strong className="dashboardHeader__hello-name">{name}</strong></h1>
          <h2 className="dashboardHeader__congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
				</div>
  );
};

export default DashboardHeader;