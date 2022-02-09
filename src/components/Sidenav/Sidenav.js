import React, { useState } from "react";
import './Sidenav.scss';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../store/counter/counterSlice'

const Sidenav = props => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const minimizeSidenav = () => {
    dispatch(increment());
    props.minimizeSidenav();
  };

  return (
    <>
      <nav className={`sidenav d-flex flex-column ${props.isExpanded ? "" : "collapse"}`}>
        <div className="sidenav-header d-flex flex-row align-items-center justify-content-between">
          <i className={`bi bi-graph-up main-logo ${props.isExpanded ? "" : "collapse"}`}></i>
          <div className={`sidenav-header-name ${props.isExpanded ? "" : "collapse"}`}>
            <h1>CLOUDERA</h1>
            <h2>Dataflow</h2>
          </div>
        </div>

        <NavLink to="/dashboard" className="sidenav-item d-flex align-items-center" activeclassname="selected">
          <i className="bi bi-speedometer2 me-2"></i>
          <div className={props.isExpanded ? "" : "collapse"}>Dashboard</div>
        </NavLink>

        <NavLink to="/catalog" className="sidenav-item d-flex align-items-center" activeclassname="selected">
          <i className="bi bi-clipboard-data me-2"></i>
          <div className={props.isExpanded ? "" : "collapse"}>Catalog</div>
        </NavLink>

        <NavLink to="/environments" className="sidenav-item d-flex align-items-center" activeclassname="selected">
          <i className="bi bi-cloud me-2"></i>
          <div className={props.isExpanded ? "" : "collapse"}>Environments</div>
        </NavLink>

        <div className="mt-auto w-100">
          <NavLink to="/help" className="sidenav-item d-flex align-items-center">
            <i className="bi bi-question-circle me-2"></i>
            <div className={props.isExpanded ? "" : "collapse"}>Help</div>
          </NavLink>
          <NavLink to="/profile" className="sidenav-item d-flex align-items-center">
            <i className="bi bi-person-circle me-2"></i>
            <div className={props.isExpanded ? "" : "collapse"}>Micheal</div>
          </NavLink>

          <div className="sidenav-item-last d-flex align-items-center justify-content-between mt-3">
            <div className={props.isExpanded ? "" : "collapse"}>{count}</div>
            <button onClick={minimizeSidenav}>
              <i className="bi bi-chevron-double-left"></i>
            </button>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Sidenav;