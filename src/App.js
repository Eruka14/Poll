import React from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import PollPage from './pages/PollPage'
import NotFoundPage from './pages/NotFoundPage'
import Recover from './pages/Recover';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css';

const router = createBrowserRouter([
  {
    // default Page
    path: '/',
    element: <HomePage/>
  }, 
  {
    // Home Page
    path: '/home',
    element: <HomePage/>
  },
  {
    // Login Page
    path: '/login',
    element: <LoginPage/>
  },
  {
    // Register Page
    path: '/register',
    element: <RegisterPage/>
  },
  {
    // Poll Page
    path: '/poll',
    element: <PollPage/>
  },
  {
    // Pass Recover Page
    path: '/recover',
    element: <Recover/>
  },
  {
    // 404 Page
    path: '*',
    element: <NotFoundPage/>
  }
])

function App() {
  return (
        // <div>
        //   <HomeNav />
        //     <div className="min-h-screen bg-gray-50 flex justify-center items-top">
        //       <div className='bg-white w-7/12'>
        //         <QuestionForm />
        //     </div>
        //     </div> 
        //   </div> 
    //  <HomePage/>
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
