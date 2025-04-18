import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      {/* Other sections will go here later */}
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <h1 className="text-4xl text-center">Welcome to My Portfolio</h1>
      </div>
    </div>
  );
}

export default App;