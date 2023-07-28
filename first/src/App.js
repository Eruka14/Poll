import React from 'react';
import QuestionForm from './components/Poll';
import Navbar from './components/navbar';
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex justify-center items-top">
        <div className='bg-white w-7/12'>
        <QuestionForm />
        </div>
      </div>
    </div>
  );
}

export default App;
