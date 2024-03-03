import { useState, createContext, useContext,useEffect } from "react";


const Themecontext = createContext();


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
 
  const [globalVisits, setGlobalVisits] = useState(null);

  useEffect(() => {
    // Fetch global visit count
         alert("welcome to my protfolio")
  }, []); 

 
   
  
 
  return (
    <Themecontext.Provider value={[theme, setTheme,globalVisits]}>
      {children}
    </Themecontext.Provider>
  );
};

//custom hook
const useTheme = () => useContext(Themecontext);

export { useTheme, ThemeProvider };
