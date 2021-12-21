import { BrowserRouter as Router, Routes, Route }from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Dashboard from '../Pages/Dashboard/Dashboard';

const Routing = function() {

  return (
    <Router className="index">
    <Header />
    <div className="mainDiv">
      <Routes>
        <Route excact path="/" element={<Dashboard />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  );
};

export default Routing;