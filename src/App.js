import React from 'react';
import Editor from './components/Editor'; 

const App = () => {
  return (
    <div style={appStyle}>
      <Editor />
    </div>
  );
};


const appStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f4f4f9',
  fontFamily: 'Arial, sans-serif',
};

export default App;
