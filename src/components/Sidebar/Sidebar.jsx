import React, { useContext, useState } from 'react';
import { FaBars, FaPlus, FaComments, FaQuestionCircle, FaHistory, FaCog } from 'react-icons/fa';
import { Context } from '../../context/Context';

const Sidebar = () => {
   const [extended, setExtended] = useState(false);
   const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

   const loadPrompt = (selectedPrompt) => {
      setRecentPrompt(selectedPrompt.prompt);
      setResultData(selectedPrompt.response);
      setShowResult(true);
   };

   return (
      <div
         className={`h-screen ${extended ? 'w-64' : 'w-20'} flex flex-col justify-between bg-gray-100 p-4 transition-all duration-300 ease-in-out shadow-lg`}
      >
         <div className="space-y-4">
            <FaBars
               onClick={() => setExtended(prev => !prev)}
               className="text-2xl cursor-pointer mx-auto"
            />
            <div
               onClick={() => newChat()}
               className="flex items-center gap-2 p-3 bg-gray-200 rounded-full text-gray-600 cursor-pointer hover:bg-gray-300"
            >
               <FaPlus className="text-xl" />
               {extended && <p>New Chat</p>}
            </div>
            {extended && (
               <div className="space-y-2">
                  <p className="text-gray-500">Recent</p>
                  {prevPrompts.map((item, index) => (
                     <div
                        key={index}
                        onClick={() => loadPrompt(item)}
                        className="flex items-center gap-2 p-3 rounded-full text-gray-700 cursor-pointer hover:bg-gray-300"
                     >
                        <FaComments className="text-xl" />
                        <p>{item.slice(0, 18)}...</p>
                     </div>
                  ))}
               </div>
            )}
         </div>
         <div className="space-y-2">
            <div className="flex items-center gap-2 p-3 rounded-full text-gray-700 cursor-pointer hover:bg-gray-300">
               <FaQuestionCircle className="text-xl" />
               {extended && <p>Help</p>}
            </div>
            <div className="flex items-center gap-2 p-3 rounded-full text-gray-700 cursor-pointer hover:bg-gray-300">
               <FaHistory className="text-xl" />
               {extended && <p>Activity</p>}
            </div>
            <div className="flex items-center gap-2 p-3 rounded-full text-gray-700 cursor-pointer hover:bg-gray-300">
               <FaCog className="text-xl" />
               {extended && <p>Settings</p>}
            </div>
         </div>
      </div>
   );
};

export default Sidebar;