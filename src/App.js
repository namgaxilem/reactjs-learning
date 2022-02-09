import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.scss';

import Sidenav from "./components/Sidenav/Sidenav";
import Catalog from "./components/Catalog/Catalog";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const minimizeSidenav = () => setIsExpanded(!isExpanded);

  return (
    <div className="d-flex flex-row overflow-hidden">
      <BrowserRouter>
        <Sidenav minimizeSidenav={minimizeSidenav} isExpanded={isExpanded}/>
        <div className={`w-100 page-wrapper ${isExpanded ? "expanded" : ""}`}>
          <header className="page-title ps-2"><h1>Page Title</h1></header>
          <div className="page-content p-2">
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

function Dashboard() {
  return <> 
   {[...Array(100).keys()].map(e => <h1>Dashboard</h1>)}
  </>;
}

function Environments() {
  return <h1>Environments</h1>
}

export default App;