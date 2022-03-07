import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { changeTitle } from "../../store/title/titleSlice";

function Initializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle("Initializer"));
  });

  return <>
    <h1>Initializer </h1>
  </>
}

export default Initializer;