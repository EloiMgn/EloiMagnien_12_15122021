/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './DashboardHeader.scss';

const DashboardHeader = function(props) {
  const name = props.userFirstName;

  return (
				<div>
          <h1 className="hello" >Bonjour <strong className="hello-name">{name}</strong></h1>
          <h2 className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
				</div>
  );
};

export default DashboardHeader;