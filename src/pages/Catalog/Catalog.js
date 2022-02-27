import React, { useEffect, useState } from "react";
import CatalogDetail from "../../components/CatalogDetail/CatalogDetail";
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
    <div class="modal fade" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">×</button>
            <h4 class="modal-title">Modal 1</h4>

          </div>
          <div class="container"></div>
          <div class="modal-body">Content for the dialog / modal goes here.
            <br />
            <br />
            <br />
            <p>more content</p>
            <br />
            <br />
            <br />	<a data-bs-toggle="modal" href="#myModal2" class="btn btn-primary">Launch modal</a>

          </div>
          <div class="modal-footer">	<a href="#" data-bs-dismiss="modal" class="btn">Close</a>
            <a href="#" class="btn btn-primary">Save changes</a>

          </div>
        </div>
      </div>
    </div>
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