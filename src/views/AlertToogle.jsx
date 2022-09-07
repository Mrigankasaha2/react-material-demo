import React, { useState } from 'react';
import { Button, Alert } from '@mui/material';

export default function AlertToogle() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        size="small"
        onClick={() => {
          setShowAlert(!showAlert);
        }}
      >
        Toogle Alert
      </Button>
      {showAlert ? (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      ) : null}
    </>
  );
}
