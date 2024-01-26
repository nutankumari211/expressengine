import React from 'react';
import cregoimg from '../assets/cregoimg.jpg';

const Home = () => {
  return (
    <div style={{marginTop: '60px'}}>
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="row">
          <div className="col-md-6 text-center">
            <p className="display-4 text-info" style={{ fontWeight: 'bold', color: 'white', marginTop: '100px',fontSize:'50px' }}>
            Discover Expression Engine
            </p>
            <p className="lead text-white">
            The Expression Engine UI enables users to easily define complex rule-based expressions with dynamic controls.
            </p>
            <p className="lead text-white" style={{ fontWeight: 'bold', color: 'aqua',fontSize:'35px', textDecoration: 'underline' }}>
             Login to use our Expression Engine
            </p>
          </div>
          <div className="col-md-6 order-md-first">
            <img src={cregoimg} alt="Crego" className="img-fluid"  style={{ height: '90%', width: '60%'}}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
