import React, { useState } from "react";
import "../styles/Login.css"
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      // Replace this with your actual authentication logic
      console.log('Logging in with username:', username, 'and password:', password);
    };
  
    return (
      <div className="bg-indigo-100 flex justify-center items-center h-screen">
        <form onSubmit={handleLogin} className="bg-gray-50 shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4">
          <h1 className="text-4xl mb-2 text-center font-medium m-8 pb-8">Бүртгүүлэх</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="lastname">
                
              </label>  
              <input
                type="text"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="appearance-none border-b-2 border-slate-300 w-full py-2 px-3 bg-slate-50 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Овог"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="firstname">
                
              </label>  
              <input
                type="text"
                id="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="appearance-none border-b-2 border-slate-300 w-full py-2 px-3 bg-slate-50 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Нэр"
              />
            </div>
            
          </div>
          <div className="mb-4">
              <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="email">
                
              </label>  
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none border-b-2 border-slate-300 w-full py-2 px-3 bg-slate-50 text-gray-600 leading-tight focus:outline-none focus:shadow-outline my-4"
                placeholder="И-Мэйл"
              />
            </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="username">
              
            </label>  
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="appearance-none border-b-2 border-slate-300 w-full py-2 px-3 bg-slate-50 text-gray-600 leading-tight focus:outline-none focus:shadow-outline my-4"
              placeholder="Нэрээ оруулна уу"
            />
          </div>
          <div className="mb-4">
            {/* <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="password">
             
            </label> */}
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none border-b-2 border-slate-300 w-full py-2 px-3 bg-slate-50 text-gray-600 leading-tight focus:outline-none focus:shadow-outline my-4"
              placeholder="Нууц үгээ оруулна уу"
            />
          </div>
          <div className="mb-1">
            <label className="block text-gray-600 text-sm font-bold mb-1" htmlFor="password">
             
            </label>
            <input
              type="passwordConfirm"
              id="passwordConfirm"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="appearance-none border-b-2 border-slate-300 w-full py-2 px-3 bg-slate-50 text-gray-600 leading-tight focus:outline-none focus:shadow-outline mt-4"
              placeholder="Нууц үгээ давтаж оруулна уу"
            />
          </div>
           <p className="pt-1 pb-2 float-right text-gray-500 text-sm">Та бүртгэлтэй бол <Link to="/login" className="text-indigo-500 hover:text-[#ff6a6a]">Энд дар</Link></p>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-[#ff6a6a] text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full mt-3"
            >
            Бүртгүүлэх
          </button>
        </form>
      </div>
    );
  };
  
  export default RegisterPage;