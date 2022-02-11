import React, { useEffect, useState } from "react";
import CatalogDetail from "../CatalogDetail/CatalogDetail";
import { useDispatch } from 'react-redux';
import { changeTitle } from "../../store/title/titleSlice";

function Catalog() {
  const dispatch = useDispatch();
  const [catalogList, setCatalogList] = useState([
    {
      id: 1,
      name: "Kafka to S3",
      version: 3,
      lastUpdated: "19 hours ago"
    },
    {
      id: 2,
      name: "Consume Pulsar",
      version: 1,
      lastUpdated: "2 hours ago"
    }
  ]);

  useEffect(() => {
    dispatch(changeTitle("Flow Catalog"));
  })

  return (<>
    <CatalogDetail />
    <div>
      <button className="btn btn-primary float-end">
        <i className="bi bi-upload me-2"></i>
        Import Flow Definition
      </button>
      <p className="float-end mt-2" style={{ clear: "both" }}>
        <i className="bi bi-arrow-clockwise me-2"></i>
        Updated 4 seconds ago
      </p>
    </div>
    <div className="" style={{ clear: "both" }}></div>

    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Versions</th>
          <th scope="col">Last Updated</th>
          <th />
        </tr>
      </thead>
      <tbody className="bg-white">
        {catalogList.map(e => (
          <tr key={e.id} data-bs-toggle="modal" data-bs-target="#myCart">
            <td>{e.name}</td>
            <td>{e.version}</td>
            <td>{e.lastUpdated}</td>
            <td>&gt;</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  )
}

export default Catalog;