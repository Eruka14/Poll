import React from "react";
import HomeNav from "../components/indexNav";
import QuestionForm from "../components/Poll";

const PollPage = () => {
    return (
        <div>
          <HomeNav />
            <div className="min-h-screen bg-gray-50 flex justify-center items-top">
              <div className='bg-white w-7/12'>
                <QuestionForm />
              </div>
            </div> 
        </div>
    )
}

export default PollPage;