import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.less";
import { useSelector } from "react-redux";
import DeployFlow from "pages/DeployFlow/DeployFlow";
import Initializer from "pages/Initializer/Initializer";
import RouteWithSidenav from "pages/RouteWithSidenav/RouteWithSidenav";
import Login from "pages/Login/Login";
import { isStoredToken } from "utils/auth";

const NotFoundRedirect = () => <Navigate to="/" />;

interface CustomRoute {
  path?: string;
  children?: React.ReactNode;
  exact?: boolean;
  element?: JSX.Element;
}

const privateRoutes: CustomRoute[] = [
  { path: "/catalog/deploy-flow", element: <DeployFlow /> },
  { path: "/environments/initializer", element: <Initializer /> },
  { path: "/*", element: <RouteWithSidenav /> },
];

const publicRoutes: CustomRoute[] = [
  { path: "/", exact: true, element: <Login /> },
  { path: "/login", exact: true, element: <Login /> },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/catalog/deploy-flow" element={<DeployFlow />}></Route>
        <Route path="/environments/initializer" element={<Initializer />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<RouteWithSidenav />}></Route> */}
        {[
          ...(isStoredToken() ? privateRoutes : publicRoutes),
          { component: NotFoundRedirect }
        ].map((route, index) => <Route key={index} {...route} />)}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
