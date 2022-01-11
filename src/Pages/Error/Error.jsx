import { Link } from 'react-router-dom';
import './Error.scss';
import Header from '../../Components/Header/Header';
import VerticalNav from '../../Components/VerticalNav/VerticalNav';



const Error = () => (
<div>
  <Header />
  <div className='mainDiv'>
    <VerticalNav />
    <div className='error'>
      <div className='error__content'>
        <h1 className='error__content__title'>404</h1>
        <div className='error__content__texts'>
          <h2 className='error__content__texts__welcome'>Cette page n&apos;existe pas encore cliquez <Link to="/" className='error__links__inlineLink'>ici</Link> pour revenir à l&apos;accueil</h2>
        </div>
        <div className='error__content__texts'>
          <h2 className='error__content__texts__text'>Sinon, cliquez ici pour revenir sur votre tableau de bord :</h2>
          <div className='error__links'>
            <Link to="/12-Karl" className='error__links__link'>Karl</Link>
            <Link to="/18-Cecilia" className='error__links__link'>Cecilia</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default Error;