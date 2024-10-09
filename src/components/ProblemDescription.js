// src/components/ProblemDescription.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function ProblemDescription() {
  return (
    <Box p={2}>
      <Typography variant="h5">Two Sum Problem</Typography>
      <Typography variant="body1" mt={2}>
        Given an array of integers, return indices of the two numbers such that they add up to a specific target.
        <br /><br />
        <strong>Example:</strong><br />
        <code>Input: nums = [2,7,11,15], target = 9</code><br />
        <code>Output: [0,1]</code>
      </Typography>
      {/* Add more problem details as needed */}
    </Box>
  );
}

export default ProblemDescription;
