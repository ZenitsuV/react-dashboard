import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className="sideNavBar">
      <div className="side_report_list">
        <NavLink to="/summary">
          <img
            className="side_report_icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDP_KeajX_tbBNKtDejLn7-EoT3VQ74FyK-g&usqp=CAU"
            alt=""
          />
          <span className="side_report_name">Geography Summary</span>
        </NavLink>
      </div>
      <div className="side_report_list">
        <NavLink to="/tracker">
          <img
            className="side_report_icon"
            src="https://www.clipartmax.com/png/middle/98-982659_disadvantaged-enterprises-summary-icon-png-white.png"
            alt=""
          />
          <span className="side_report_name">Tracker</span>
        </NavLink>
      </div>
      <div className="side_report_list">
        <NavLink to="/profile">
          <img
            className="side_report_icon"
            src="https://www.clipartmax.com/png/middle/98-982659_disadvantaged-enterprises-summary-icon-png-white.png"
            alt=""
          />
          <span className="side_report_name">Profile</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidenav;
