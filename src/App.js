
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "react-bootstrap";

import { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  async function fetchData() {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  return (
    <div className="App">
      <h1 className="text-center">Hello Data Fetching Assignment</h1>
      <div className="w-100 d-flex justify-content-center">
        <Button type="button" className="btn btn-primary text-center mt-4"  onClick={fetchData}>
        Fetch User Data
        </Button>
      </div>
      {data.length > 0 && (
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => {
              return (
                <tr key={person.id}>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>{person.phone}</td>
                  <td>{person.website}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}