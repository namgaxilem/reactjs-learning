import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import store, { increment } from './store/store';

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar.js";

import Calculator from "./Pages/Calculator/Calculator.js";
import Todo from "./Pages/Todo/Todo.js";

export default function App() {

  const clickTest = () => {
    console.log("aa");
    store.dispatch(increment);
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