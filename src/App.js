import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.less';
import { useSelector } from 'react-redux';
import Steps from "./pages/MultiStepInit/MultiStepInit";
import RouteWithSidenav from "./pages/RouteWithSidenav/RouteWithSidenav";

function App() {
  const title = useSelector(state => state.title.value);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<RouteWithSidenav />}>
        </Route>
        <Route path="/steps" element={<Steps />}>
        </Route>
        <Route path="/" element={<Steps />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;