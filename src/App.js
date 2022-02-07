import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar.js";

import Calculator from "./Pages/Calculator/Calculator.js";
import Todo from "./Pages/Todo/Todo.js";

export default function App() {
  let location = useLocation();

  const clickTest = () => {
    console.log("aa", location);
  }
  
  return (
    <div className="d-flex flex-row" onClick={clickTest}>
      <BrowserRouter>
        <Sidebar />
        <Container fluid>
          <header>akjsyd</header>
          <Routes>
            <Route path="/calculator" element={<Calculator />}>
            </Route>
            <Route path="/todo" element={<Todo />}>
            </Route>
            <Route path="/" element={<Todo />}>
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  )
}