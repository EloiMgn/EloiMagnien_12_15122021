/* eslint-disable import/no-named-as-default */
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Welcome from '../Pages/Welcome/Welcome';
import Error from '../Pages/Error/Error';

/**
 * 
 * @returns { void } 
 */
const Routing = () => (
    <Router className="index">
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/:id/:name" element={<Dashboard />} />
        <Route path="/:id/:name/*" element={<Error />} />
      </Routes>
  </Router>
  );

export default Routing;