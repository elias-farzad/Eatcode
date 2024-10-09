// src/App.js
import React, { useState } from 'react';
import SplitPane from 'react18-split-pane';
import { Button, Drawer } from '@mui/material';
import ProblemDescription from './components/ProblemDescription';
import CodeEditor from './components/CodeEditor';
import Console from './components/Console';
import Chatbot from './components/Chatbot';
import './App.css'; // Create this file for custom styles

function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setChatbotOpen(!chatbotOpen);
  };

  return (
    <div className="App">
      {/* Navbar Component */}
      {/* <Navbar /> */}

      {/* Main Split Pane: Left (Problem) and Right (Code Editor + Console) */}
      <SplitPane split="vertical" minSize={200} defaultSize={300}>
        {/* Left Pane: Problem Description */}
        <ProblemDescription />

        {/* Right Pane: Code Editor and Console */}
        <SplitPane split="horizontal" minSize={100} defaultSize="70%">
          <CodeEditor />
          <Console />
        </SplitPane>
      </SplitPane>

      {/* Chatbot Toggle Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={toggleChatbot}
        style={{ position: 'fixed', bottom: 20, right: 20 }}
      >
        Chatbot
      </Button>

      {/* Chatbot Drawer */}
      <Drawer
        anchor="right"
        open={chatbotOpen}
        onClose={toggleChatbot}
        variant="temporary"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Chatbot />
      </Drawer>
    </div>
  );
}

export default App;
