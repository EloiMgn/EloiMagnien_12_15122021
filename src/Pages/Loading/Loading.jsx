import './Loading.scss';

/**
 * Return react component Loading page until the data have been fetched
 * @returns { JSX.Element } 
 */
const Loading = () => (
  <div className='loading'>
    <div className='loading__content' id="loading"></div>
  </div>
);

export default Loading;