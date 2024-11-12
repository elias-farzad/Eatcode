import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

function CodeEditor() {
  const [code, setCode] = useState('# Write your Python code here...');

  const handleChange = (value) => {
    setCode(value);
  };

  return (
    <Box p={2} height="100%" width="100%">
      <Typography variant="h6">Python Code Editor</Typography>
      <CodeMirror
        value={code}
        height="400px"
        extensions={[python()]}
        onChange={(value) => handleChange(value)}
        theme="light"
        style={{ marginTop: '10px', backgroundColor: '#f5f5f5' }}
      />
    </Box>
  );
}

export default CodeEditor;
