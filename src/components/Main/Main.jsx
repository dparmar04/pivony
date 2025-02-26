import React, { useContext, useState } from 'react'
import './Main.css'
import { Context } from '../../context/Context'
import SummaryCard from '../SummaryCard';
import { FaAngleRight, FaBars } from "react-icons/fa6";
import Sidebar from '../Sidebar/Sidebar';

const Main = () => {
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const summary = "This email discusses the upcoming project launch and next steps.";
   const keyTakeaways = [
      "Project launch scheduled for next Monday.",
      "Team needs to submit final changes by Friday.",
      "Client feedback will be reviewed on Wednesday."
   ];

   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

   return (
      <div className='main flex w-full h-full'>
         {/* Sidebar - Hidden on mobile, toggleable */}
         <div className={`sidebar-container ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
            <Sidebar />
         </div>

         <div className="h-screen w-full flex flex-col items-center justify-between">
            {/* Navbar */}
            <div className="nav w-full flex justify-between items-center py-2 px-5">
               <div className="flex items-center gap-3">
                  <p className='text-2xl'>Gemini</p>
               </div>
               <img className='w-[30px] rounded-full' src="/user_icon.png" alt="" />
            </div>

            {!showResult
               ? <div className='flex flex-col w-3/4 mx-auto'>
                  <div className="greet mb-5 text-left md:text-left">
                     <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                        <span>Hello, Rihab</span>
                     </p>
                     <p className="text-2xl sm:text-4xl md:text-5xl text-gray-400">
                        How can I help you today?
                     </p>
                  </div>
                  <div className="flex flex-col gap-1 p-3 md:p-5 mb-5">
                     <div className="h-auto flex gap-3 items-center bg-gray-200 hover:bg-gray-300 p-3 md:p-4 rounded-t-2xl cursor-pointer" onClick={() => onSent()}>
                        <img className="w-6 h-6 md:w-7 md:h-7" src="/gallery_icon.png" alt="" />
                        <div className="flex flex-col flex-1">
                           <p className="text-sm md:text-[16px] font-medium text-black">Summarize this email</p>
                           <p className="text-xs md:text-[16px] font-normal text-gray-600">in more detail</p>
                        </div>
                     </div>
                     <div className="h-auto flex gap-3 items-center bg-gray-200 hover:bg-gray-300 p-3 md:p-4 cursor-pointer" onClick={() => onSent()}>
                        <img className="w-6 h-6 md:w-7 md:h-7" src="/bulb_icon.png" alt="" />
                        <div className="flex flex-col flex-1">
                           <p className="text-sm md:text-[16px] font-medium text-black">What can Gemini do</p>
                           <p className="text-xs md:text-[16px] font-normal text-gray-600">in Gmail</p>
                        </div>
                     </div>
                     <div className="h-auto flex gap-3 items-center bg-gray-200 hover:bg-gray-300 p-3 md:p-4 rounded-b-2xl cursor-pointer " onClick={() => onSent()}>
                        <img className="w-6 h-6 md:w-7 md:h-7" src="/message_icon.png" alt="" />
                        <div className="flex flex-col flex-1">
                           <p className="text-sm md:text-[16px] font-medium text-black">List Action Items</p>
                           <p className="text-xs md:text-[16px] font-normal text-gray-600">from this email</p>
                        </div>
                     </div>

                     {/* More Suggestions Button */}
                     <div className="flex items-center gap-2 mx-auto cursor-pointer">
                        <p className="text-gray-400 font-medium text-sm md:text-base">More suggestions</p>
                        <FaAngleRight className="text-gray-400 text-sm md:text-base" />
                     </div>
                  </div>
               </div>
               : <div className='result w-full px-[5%]'>
                  <div className="result-title flex items-center my-2 gap-5">
                     <img className='w-10 rounded-full' src="/user_icon.png" alt="" />
                     <p>{recentPrompt}</p>
                  </div>
                  <div className="result-data flex flex-col">
                     <img className='w-10' src="/gemini_icon.png" alt="" />
                     {loading ?
                        (<div className='loader'>
                           <hr />
                           <hr />
                           <hr />
                        </div>
                        ) : (
                           <SummaryCard
                              title="Email Summary"
                              summary={summary}
                              keyTakeaways={keyTakeaways}
                           />
                        )}
                     {/* Suggested Actions */}
                     <div className="suggestions mt-4 flex flex-wrap justify-start gap-2">
                        <button className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Show more suggestions</button>
                        <button className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-gray-300">What is the purpose of this email?</button>
                        <button className="px-4 py-2 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Summarize in bullet points</button>
                     </div>
                  </div>
               </div>
            }

            {/* Input Box */}
            <div className="w-full md:w-3/4 px-4 ">
               <div className="flex items-center bg-gray-100 rounded-xl p-3 shadow-md">
                  <input
                     onChange={(e) => setInput(e.target.value)}
                     value={input}
                     type="text"
                     placeholder="Enter a prompt here..."
                     onKeyDown={(e) => e.key === "Enter" && onSent()}
                     className="flex-grow bg-transparent outline-none text-sm md:text-base p-2 w-full"
                  />
                  {input && (
                     <button onClick={() => onSent()} className="p-2">
                        <img src="/send_icon.png" alt="Send" className="w-5 h-5 md:w-6 md:h-6" />
                     </button>
                  )}
               </div>
               <p className="text-xs md:text-sm text-gray-500 mt-2 text-center px-2">
                  Gemini for Workspace can make mistakes, including about people, so double-check it. Learn more
               </p>
            </div>
         </div>
      </div>
   )
}

export default Main;
