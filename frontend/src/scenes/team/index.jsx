import React from "react";
import { Table, Container, Badge } from "react-bootstrap";
import { FaUserShield, FaLockOpen, FaUserSecret } from "react-icons/fa";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";

const Team = () => {
  return (
    <Container fluid className="mt-4 px-3 px-md-5">
      <Header title="TEAM" subtitle="Managing the Team Members" />

      <div className="table-responsive mt-4">
        <Table striped bordered hover responsive className="text-center">
          <thead className="bg-primary text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Access Level</th>
            </tr>
          </thead>
          <tbody>
            {mockDataTeam.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td className="text-success">{row.name}</td>
                <td>{row.age}</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
                <td>
                  <Badge
                    bg={
                      row.access === "admin"
                        ? "success"
                        : row.access === "manager"
                        ? "warning"
                        : "secondary"
                    }
                    className="p-2 d-flex align-items-center justify-content-center"
                  >
                    {row.access === "admin" && <FaUserShield className="me-2" />}
                    {row.access === "manager" && <FaUserSecret className="me-2" />}
                    {row.access === "user" && <FaLockOpen className="me-2" />}
                    {row.access}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Team;
