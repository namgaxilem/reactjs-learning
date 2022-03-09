import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.less';
import { useSelector } from 'react-redux';
import DeployFlow from "pages/DeployFlow/DeployFlow";
import Initializer from "pages/Initializer/Initializer";
import RouteWithSidenav from "pages/RouteWithSidenav/RouteWithSidenav";

function App() {
  // const title = useSelector(state => state.title.value);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/catalog/deploy-flow" element={<DeployFlow />}>
        </Route>
        <Route path="/environments/initializer" element={<Initializer />}>
        </Route>
        <Route path="*" element={<RouteWithSidenav />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;