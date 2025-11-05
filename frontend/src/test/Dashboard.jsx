import React from "react";
import Sidebar from "../test/Sidebar";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from "chart.js";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

const Dashboard1 = () => {
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{ label: "Sales ($)", data: [5000, 8000, 6500, 9000, 12000, 11000], backgroundColor: "rgba(54, 162, 235, 0.8)" }]
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [{ label: "User Activity", data: [120, 190, 300, 250], borderColor: "rgba(255, 99, 132, 1)", backgroundColor: "rgba(255, 99, 132, 0.4)", fill: true }]
  };

  const pieData = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [{ data: [40, 35, 25], backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }]
  };

  const doughnutData = {
    labels: ["Satisfied", "Neutral", "Dissatisfied"],
    datasets: [{ data: [70, 20, 10], backgroundColor: ["#4CAF50", "#FF9800", "#F44336"] }]
  };

  return (
    <Sidebar>
      <div className="dashboard-container">
        <Container>
          <h2 className="text-center text-white mb-4">Welcome to Dashboard</h2>
          
          {/* Charts Section */}
          <Row>
            <Col md={6} className="mb-4">
              <Card className="p-3 shadow chart-card">
                <h4>Sales Report</h4>
                <Bar data={barData} />
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="p-3 shadow chart-card">
                <h4>User Activity</h4>
                <Line data={lineData} />
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="p-3 shadow chart-card">
                <h4>Product Distribution</h4>
                <Pie data={pieData} />
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="p-3 shadow chart-card">
                <h4>Customer Satisfaction</h4>
                <Doughnut data={doughnutData} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Sidebar>
  );
};

export default Dashboard1;
