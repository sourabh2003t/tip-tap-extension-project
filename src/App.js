import React from 'react';
import Editor from './components/Editor'; // Importing the Editor component

const App = () => {
  return (
    <div style={appStyle}>
      <Editor />
    </div>
  );
};

// Main app styling
const appStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f4f4f9',
  fontFamily: 'Arial, sans-serif',
};

export default App;
