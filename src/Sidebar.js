import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import './Sidebar.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import store from './store/store';

const Sidebar = props => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <Nav className={`sidebar d-flex flex-column ${isExpanded ? "" : "collapse"}`}>
        <div className="sidebar-header d-flex flex-row align-items-center justify-content-between">
          <i className={`bi bi-graph-up main-logo ${isExpanded ? "" : "collapse"}`}></i>
          <div className={`sidebar-header-name ${isExpanded ? "" : "collapse"}`}>
            <h1>CLOUDERA</h1>
            <h2>Dataflow</h2>
          </div>
        </div>

        <NavLink to="/" className="sidebar-item d-flex align-items-center" activeclassname="selected">
          <i className="bi bi-speedometer2 me-2"></i>
          <div className={isExpanded ? "" : "collapse"}>Home</div>
        </NavLink>

        <NavLink to="/calculator" className="sidebar-item d-flex align-items-center" activeclassname="selected">
          <i className="bi bi-clipboard-data me-2"></i>
          <div className={isExpanded ? "" : "collapse"}>Catalog</div>
        </NavLink>

        <NavLink to="/todo" className="sidebar-item d-flex align-items-center" activeclassname="selected">
          <i className="bi bi-cloud me-2"></i>
          <div className={isExpanded ? "" : "collapse"}>Environments</div>
        </NavLink>

        <div className="mt-auto">
          <NavLink to="/help" className="sidebar-item d-flex align-items-center">
            <i className="bi bi-question-circle me-2"></i>
            <div className={isExpanded ? "" : "collapse"}>Help</div>
          </NavLink>
          <NavLink to="/profile" className="sidebar-item d-flex align-items-center">
            <i className="bi bi-person-circle me-2"></i>
            <div className={isExpanded ? "" : "collapse"}>Micheal</div>
          </NavLink>

          <div className="sidebar-item-last d-flex align-items-center justify-content-between mt-3">
            <div className={isExpanded ? "" : "collapse"}>{store.getState().count.toString()}</div>
            <button onClick={() => setIsExpanded(!isExpanded)}>
              <i className="bi bi-chevron-double-left"></i>
            </button>
          </div>
        </div>

      </Nav>
    </>
  );
};

export default Sidebar;