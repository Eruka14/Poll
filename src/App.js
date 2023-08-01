import React from 'react';
import QuestionForm from './components/Poll';
import Navbar from './components/navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import HomeNav from './components/indexNav'
import {BrowserRouter, Route, Router, Routes, useRoutes} from 'react-router-dom';
import './App.css';

function App() {
  return (
        <div>
          <HomeNav />
            <div className="min-h-screen bg-gray-50 flex justify-center items-top">
              <div className='bg-white w-7/12'>
                <QuestionForm />
            </div>
            </div> 
              
              <BrowserRouter>
                <Routes>
                  <Route path='/login' element={<LoginPage/>} />
                  <Route path='/register' element={<RegisterPage/>} />
                </Routes> 
              </BrowserRouter>
          </div> 
    //  <HomePage/>
  );
}

export default App;
