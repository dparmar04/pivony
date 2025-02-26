import { FaCopy, FaExpand, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { FaRegCopy, FaExpandAlt } from "react-icons/fa";
import { GrSearchAdvanced } from "react-icons/gr";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { MdOutlineThumbDownAlt } from "react-icons/md";

const SummaryCard = ({ title, summary, keyTakeaways, onCopy, onExpand, onLike, onDislike }) => {
   return (
      <div className="bg-white p-4 w-full">
         <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">{title}</h3>
         </div>
         <p className="text-gray-700">{summary}</p>
         <div className="mt-3">
            <h4 className="font-semibold">Key Takeaways:</h4>
            <ul className="list-disc pl-5 text-gray-600">
               {keyTakeaways.map((point, index) => (
                  <li key={index}>{point}</li>
               ))}
            </ul>
         </div>
         <div className="flex justify-between gap-3 mt-3">
            <div className="flex items-center gap-6">
               <FaRegCopy className="icon text-gray-500 hover:text-black" title="Copy" />
               <GrSearchAdvanced className="icon text-gray-500 hover:text-black" title="search" />
            </div>
            <div className="flex items-center gap-6">
               <MdOutlineThumbUpAlt className="cursor-pointer text-gray-500 hover:text-black" onClick={onLike} />
               <MdOutlineThumbDownAlt className="cursor-pointer text-gray-500 hover:text-black" onClick={onDislike} />
            </div>
         </div>
      </div>
   );
};

export default SummaryCard;
