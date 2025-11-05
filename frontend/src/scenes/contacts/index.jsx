import { Container, Row, Col } from "react-bootstrap";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "registrarId", headerName: "Registrar ID", width: 150 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      cellClassName: "text-primary",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "address",
      headerName: "Address",
      width: 300,
    },
    {
      field: "city",
      headerName: "City",
      width: 150,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      width: 120,
    },
  ];

  return (
      <Container fluid className="mt-4">
        <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
        <Row className="mt-4">
          <Col>
            <div className="p-3 rounded"  style={{ background: colors.greenAccent[1000]}} >
              <div style={{ height: "75vh", width: "100%" }} className=" rounded p-2">
                <DataGrid
                  rows={mockDataContacts}
                  columns={columns}
                  components={{ Toolbar: GridToolbar }}
                  pageSize={10}
                  checkboxSelection
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default Contacts;
