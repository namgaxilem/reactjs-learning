import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import { useSelector } from 'react-redux';

import Sidenav from "./components/Sidenav/Sidenav";
import Dashboard from "./components/Dashboard/Dashboard";
import Catalog from "./components/Catalog/Catalog";
import Environments from "./components/Environments/Environments";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const minimizeSidenav = () => setIsExpanded(!isExpanded);
  const title = useSelector(state => state.title.value);

  return (
    <div className="d-flex flex-row overflow-hidden">
      <BrowserRouter>
        <Sidenav minimizeSidenav={minimizeSidenav} isExpanded={isExpanded} />
        <div className={`w-100 page-wrapper ${isExpanded ? "expanded" : ""}`}>
          <header className="page-title ps-2"><h1>{title}</h1></header>
          <div className="page-content p-4">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}>
              </Route>
              <Route path="/catalog" element={<Catalog />}>
              </Route>
              <Route path="/environments" element={<Environments />}>
              </Route>
              <Route path="/" element={<Dashboard />}>
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;