import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function Catalog() {
  return (<>
    <button className="btn btn-primary float-right">
      <i class="bi bi-upload me-2"></i>
      Import Flow Definition
    </button>
    <h1>Catalog</h1>
  </>
  )
}

export default Catalog;