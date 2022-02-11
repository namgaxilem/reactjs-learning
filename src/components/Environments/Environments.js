import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { changeTitle } from "../../store/title/titleSlice";
import './Environments.scss';

function Environments() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle("Environments"));
  });

  return (<>
    <h1>Environments</h1>
  </>
  )
}

export default Environments;