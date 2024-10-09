// src/components/Console.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function Console() {
  return (
    <Box p={2} height="100%" bgcolor="#1e1e1e" color="#d4d4d4">
      <Typography variant="h6">Console Output</Typography>
      {/* Display output here */}
      <div style={{ height: '80%', overflowY: 'auto', marginTop: '10px' }}>
        <p>Output will appear here...</p>
      </div>
    </Box>
  );
}

export default Console;
