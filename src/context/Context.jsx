import { createContext, useState } from 'react';
export const Context = createContext();

const ContextProvider = (props) => {
   const [input, setInput] = useState("");
   const [recentPrompt, setRecentPrompt] = useState("");
   const [prevPrompts, setPrevPrompts] = useState([]);
   // const [prevResponses,setPrevResponses]=useState([]);
   const [showResult, setShowResult] = useState(false);
   const [loading, setLoading] = useState(false);
   const [resultData, setResultData] = useState("");

   const delayPara = (index, nextWord) => {
      setTimeout(function () {
         setResultData(prev => prev + nextWord);
      }, 75 * index)
   }
   const onSent = async (prompt) => {
      setLoading(true); // ✅ Set loading to true before fetching
      setResultData(""); // Clear previous result
      setShowResult(true);

      let response;
      if (prompt !== undefined) {
         response = "Summarizing the email...";
         setRecentPrompt(prompt);
      } else {
         setPrevPrompts(prev => [...prev, input]);
         setRecentPrompt(input);
         response = "Summarizing the email...";
      }

      setTimeout(() => { // Simulate delay to see loading effect
         setResultData(response);
         setLoading(false); // ✅ Set loading to false after fetching
      }, 2000);

      setInput(""); // Clear input after submission
   };


   const newChat = () => {
      setLoading(false);
      setShowResult(false);
      setPrevPrompts([]); // Clear previous chat only when "New Chat" is clicked
   };



   const contextValue = {
      prevPrompts,
      setPrevPrompts,
      onSent,
      setRecentPrompt,
      recentPrompt,
      showResult,
      loading,
      resultData,
      input,
      setInput,
      newChat
   }

   return (
      <Context.Provider value={contextValue}>
         {props.children}
      </Context.Provider>
   )
}
export default ContextProvider
