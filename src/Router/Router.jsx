/* eslint-disable import/no-named-as-default */
import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import Header from '../Components/Header/Header';
import VerticalNav from '../Components/VerticalNav/VerticalNav';
import Dashboard from '../Pages/Dashboard/Dashboard';

const Routing = function() {

  return (
    <Router className="index">
    <Header />
    <div className="mainDiv">
    <VerticalNav />
      <Routes>
        <Route exact path="/" element={<Dashboard id='12'/>} />
        <Route path="/:id" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>
  );
};

export default Routing;