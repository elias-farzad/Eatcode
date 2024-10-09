// src/components/Chatbot.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'Chatbot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender: 'User', text: input }]);
    setInput('');
    // Here, you would send the input to your backend or OpenAI API and handle the response.
  };

  return (
    <Box p={2} width={300} height="100%" display="flex" flexDirection="column">
      <Typography variant="h6">AI Chatbot</Typography>
      {/* Chat messages */}
      <Box
        mt={2}
        mb={2}
        p={1}
        bgcolor="#f0f0f0"
        height="70%"
        overflow="auto"
        borderRadius={1}
      >
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </Box>
      {/* Input field */}
      <Box display="flex">
        <TextField
          variant="outlined"
          size="small"
          placeholder="Type your message..."
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
        />
        <Button variant="contained" color="primary" style={{ marginLeft: '5px' }} onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default Chatbot;
