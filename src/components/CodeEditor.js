// src/components/CodeEditor.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function CodeEditor() {
  return (
    <Box p={2} height="100%">
      <Typography variant="h6">Code Editor</Typography>
      {/* Integrate CodeMirror here */}
      <div style={{ height: '90%', backgroundColor: '#f5f5f5', marginTop: '10px' }}>
        {/* Placeholder for Code Editor */}
        <p style={{ textAlign: 'center', paddingTop: '40px', color: '#999' }}>
          Code Editor Coming Soon
        </p>
      </div>
    </Box>
  );
}

export default CodeEditor;
