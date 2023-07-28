import React from "react";
import { ReactComponentElement } from "react";
import { FcFaq } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai"
import { AiOutlineHome } from "react-icons/ai"

const Navbar = () => {
    return (   
        // Navigation parent element
        // Nav
        <nav className="w-full bg-white  drop-shadow-md">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <h1 className="flex items-center p-5 text-xl font-bold cursor-pointer">QuestionPoll<FcFaq className="ml-1" /></h1>
                <ul className="flex gap-5 p-5 font-normal">
                   <li className="flex items-center cursor-pointer"><AiOutlineHome className="mr-1"/>Нүүр</li>
                   <li className="flex items-center cursor-pointer"><AiOutlineUser className="mr-1"/>Нэвтрэх</li> 
                   <li className="px-4 py-2 bg-emerald-400 rounded-lg cursor-pointer hover:bg-emerald-500 ">Бүртгүүлэх</li> 
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
