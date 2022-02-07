import React from "react";
import { Nav } from "react-bootstrap";
import './Sidebar.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

const Sidebar = props => {
  return (
    <>
      <Nav className="sidebar d-flex flex-column">
        <div className="sidebar-header d-flex flex-row align-items-center justify-content-between">
          <i className="bi bi-graph-up"></i>
          <div className="sidebar-header-name">
            <h1>CLOUDERA</h1>
            <h2>Dataflow</h2>
          </div>
        </div>

        <NavLink to="/" className="sidebar-item d-flex align-items-center" activeClassName="selected">
          <i className="bi bi-speedometer2 me-2"></i>
          <div>Home</div>
        </NavLink>

        <NavLink to="/calculator" className="sidebar-item d-flex align-items-center" activeClassName="selected">
          <i className="bi bi-clipboard-data me-2"></i>
          <div>Catalog</div>
        </NavLink>

        <NavLink to="/todo" className="sidebar-item d-flex align-items-center">
          <i className="bi bi-cloud me-2"></i>
          <div>Environments</div>
        </NavLink>

        <div className="mt-auto">
          <NavLink to="/help" className="sidebar-item d-flex align-items-center">
            <i className="bi bi-question-circle me-2"></i>
            <div>Help</div>
          </NavLink>
          <NavLink to="/profile" className="sidebar-item d-flex align-items-center">
            <i className="bi bi-person-circle me-2"></i>
            <div>Micheal</div>
          </NavLink>

          <div className="sidebar-item-last d-flex align-items-center justify-content-between mt-3">
            <div>b23s2445w</div>
            <button>
              <i className="bi bi-chevron-double-left"></i>
            </button>
          </div>
        </div>

      </Nav>
    </>
  );
};

export default Sidebar;