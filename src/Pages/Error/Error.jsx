import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Error.scss';

/**
* Return react component Error page in case of wrong path
* @returns { JSX.Element }
*/
const Error = ({error}) => {
  if(error === 404) {
    return (
      <div className='error__content'>
        <h1 className='error__content__title'>{error}</h1>
        <div className='error__content__texts'>
          <h2 className='error__content__texts__welcome'>Cette page n&apos;existe pas encore cliquez
            <Link to="/" className='error__links__inlineLink'>ici</Link> pour revenir à l&apos;accueil</h2>
        </div>
        <div className='error__content__texts'>
          <h2 className='error__content__texts__text'>Sinon, cliquez ici pour revenir sur votre tableau de bord :</h2>
          <div className='error__links'>
            <Link to="/12/Karl" className='error__links__link'>Karl</Link>
            <Link to="/18/Cecilia" className='error__links__link'>Cecilia</Link>
            <Link to="/16/Test" className='error__links__link'>TestDatas</Link>
          </div>
        </div>
      </div>
      );
  } 
  return (
  <div className='error__content'>
    <h1 className='error__content__title'>{error}</h1>
    <div className='error__content__texts'>
      <h2 className='error__content__texts__welcome'>Le serveur n&apos;est pas disponible pour le moment, veuillez réessayer ultérieurement</h2>
    </div>
    <div className='error__content__texts'>
      <h2 className='error__content__texts__text'>Cliquez ici pour accéder aux données mockées:</h2>
      <div className='error__links'>
        <Link to="/16/Test" className='error__links__link'>TestDatas</Link>
      </div>
    </div>
  </div>
  );
};

Error.propTypes = {
  error: PropTypes.number.isRequired,
};

export default Error;