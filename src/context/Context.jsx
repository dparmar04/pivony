import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
   const [input, setInput] = useState("");
   const [recentPrompt, setRecentPrompt] = useState("");
   const [prevPrompts, setPrevPrompts] = useState([]);
   const [showResult, setShowResult] = useState(false);
   const [loading, setLoading] = useState(false);
   const [resultData, setResultData] = useState("");

   const newChat = () => {
      setLoading(false);
      setShowResult(false);
      setResultData("");
      setPrevPrompts([]);
   };

   const onSent = (prompt) => {
      setResultData(""); // Clear previous results
      setLoading(true);
      setShowResult(true);

      let simulatedResponse = "This is a simulated response..."; // Fake response
      setTimeout(() => {
         setResultData(simulatedResponse);
         setRecentPrompt(prompt || input);
         if (!prompt) setPrevPrompts((prev) => [...prev, input]);
         setLoading(false);
         setInput("");
      }, 2000); // Simulate API delay
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
      newChat,
   };

   return (
      <Context.Provider value={contextValue}>
         {props.children}
      </Context.Provider>
   );
};

export default ContextProvider;
