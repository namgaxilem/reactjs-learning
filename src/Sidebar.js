import React from "react";
import { Nav } from "react-bootstrap";
import './Sidebar.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Sidebar = props => {
  return (
    <>
      <Nav className="sidebar">
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/calculator">Calculator App</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/todo">Todo App</Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Sidebar;