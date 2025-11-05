// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

// Create Context
const AppContext = createContext();

// Create a custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// AppContext Provider component
export const AppProvider = ({ children }) => {
  const [config, setConfig] = useState({
    isDark: false, // Example initial config state
  });

  return (
    <AppContext.Provider value={{ config, setConfig }}>
      {children}
    </AppContext.Provider>
  );
};
