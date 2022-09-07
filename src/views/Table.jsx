import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material';

export default function DataTable() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setTableData(response.data);
      })
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  }, []);
  let tabled = () => {
    return tableData.map((row) => {
      return (
        <TableRow key={row.id}>
          <TableCell>{row.albumId}</TableCell>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.title}</TableCell>
          <TableCell>{row.url}</TableCell>
          <TableCell>{row.thumbnailUrl}</TableCell>
        </TableRow>
      );
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>albumId</TableCell>
            <TableCell>id</TableCell>
            <TableCell>title</TableCell>
            <TableCell>url</TableCell>
            <TableCell>thumbnailUrl</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{tabled()}</TableBody>
      </Table>
    </TableContainer>
  );
}
