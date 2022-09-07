import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

export default function Grid() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        setRows(response.data);
      })
      .catch((errorMessage) => {
        console.error(errorMessage);
      });
  }, []);
  const columns = [
    { field: 'albumId', headerName: 'albumId', width: 70 },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'title', width: 300 },
    { field: 'url', headerName: 'url', width: 300 },
    { field: 'thumbnailUrl', headerName: 'thumbnailUrl', width: 300 },
  ];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
