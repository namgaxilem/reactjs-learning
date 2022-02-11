import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { changeTitle } from "../../store/title/titleSlice";
import './Dashboard.scss';

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle("Dashboard"));
  });

  return (<>
    <h1> Dashboard</h1>
  </>
  )
}

export default Dashboard;