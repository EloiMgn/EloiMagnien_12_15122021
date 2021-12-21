import './DashboardHeader.scss';

const DashboardHeader = function(props) {
  // let user;
  // fetch('http://localhost:3000/user/18')
  // .then((data) => data.json())
  // .then((datasObj) => {
  //   user = JSON.stringify(datasObj);
  //   console.log(JSON.parse(user));
  // });
  const name = props.userFirstName;
  return (
				<div>
          <h1 className="hello">Bonjour <strong className="hello-name">{name}</strong></h1>
          <h2 className="congrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
				</div>
  );
};

export default DashboardHeader;