import React from 'react';
import CheckboxList from './components/Poll';
import './App.css';
function App() {
  return (
    <div>  <h1 className="text-2xl font-bold p-4 m-2 mb-4">Асуултын хэсэг:</h1>
    <div className="min-h-screen bg-gray-100 flex justify-center items-top">
      <CheckboxList />
    </div>
    </div>
  );
}

export default App;
