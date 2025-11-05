import { useState } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { Button, Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MeterTransfer() {
  const [sourceData, setSourceData] = useState([
    { id: 1, meterNo: "99000643", checked: false },
    { id: 2, meterNo: "53492147", checked: false },
    { id: 3, meterNo: "91000186", checked: false },
    { id: 4, meterNo: "53492199", checked: false },
    { id: 5, meterNo: "SC16002233", checked: false },
  ]);

  const [destinationData, setDestinationData] = useState([]);

  const handleCheckboxChange = (id) => {
    setSourceData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const transferSelected = () => {
    const selected = sourceData.filter((item) => item.checked);
    setDestinationData([...destinationData, ...selected]);
    setSourceData(sourceData.filter((item) => !item.checked));
  };

  const transferAll = () => {
    setDestinationData([...destinationData, ...sourceData]);
    setSourceData([]);
  };

  const resetTransfer = () => {
    setSourceData([...sourceData, ...destinationData]);
    setDestinationData([]);
  };

  return (
    <Box display="flex" gap={4} p={4}>
      {/* Source Table */}
      <Card sx={{ width: "35%" }}>
        <CardHeader title="Source" sx={{ backgroundColor: "blue", color: "white", textAlign: "center" }} />
        <CardContent>
          <TextField fullWidth placeholder="🔍 Search" size="small" margin="dense" />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell align="center">Actions</TableCell>
                  <TableCell align="center">Meter No</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sourceData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="center">
                      <Checkbox
                        checked={item.checked}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                    </TableCell>
                    <TableCell align="center">{item.meterNo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Operation Buttons */}
      <Card sx={{ width: "15%", display: "flex", alignItems: "center" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography align="center" sx={{ backgroundColor: "blue", color: "white", p: 1, borderRadius: 1 }}>
            Operation
          </Typography>
          <Button variant="contained" onClick={transferSelected}>&gt;</Button>
          <Button variant="contained" onClick={transferAll}>&gt;&gt;</Button>
          <Button variant="contained" color="error" onClick={resetTransfer}>
            Reset
          </Button>
        </CardContent>
      </Card>

      {/* Destination Table */}
      <Card sx={{ width: "35%" }}>
        <CardHeader title="Destination" sx={{ backgroundColor: "blue", color: "white", textAlign: "center" }} />
        <CardContent>
          <TextField fullWidth placeholder="🔍 Search" size="small" margin="dense" />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableCell align="center">Actions</TableCell>
                  <TableCell align="center">Meter No</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {destinationData.length > 0 ? (
                  destinationData.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell align="center">✔</TableCell>
                      <TableCell align="center">{item.meterNo}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={2} align="center" sx={{ color: "red" }}>
                      No records found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
