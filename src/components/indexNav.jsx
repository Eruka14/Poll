import React from "react";
import { FcFaq } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai"

const HomeNav = () => {
    return (   
        // Navigation parent element
        // Nav
        <nav className="w-full bg-white sticky top-0 z-10">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <h1 className="flex items-center p-3 text-2xl font-bold cursor-pointer">QuestionPoll<FcFaq className="ml-1" /></h1>
                <ul className="flex gap-5 p-5 font-normal">
                   <li className="flex items-center cursor-pointer"><AiOutlineHome className="mr-1"/>Нүүр</li>
                </ul>
            </div>
        </nav>
    );
}

export default HomeNav;