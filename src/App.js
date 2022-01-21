import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar.js";

import Calculator from "./Pages/Calculator/Calculator.js";
import Todo from "./Pages/Todo/Todo.js";

export default function App() {
  return (
    <Container fluid>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/calculator" element={<Calculator />}>
          </Route>
          <Route path="/todo" element={<Todo />}>
          </Route>
          <Route path="/" element={<Todo />}>
          </Route>
        </Routes>
      </Router>
    </Container>
  )
}