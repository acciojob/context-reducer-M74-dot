import React, { createContext, useState } from 'react';

// Create Context
export const AppContext = createContext();

// AppProvider component to provide context to other components
export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Login status
  const [items, setItems] = useState([]); // List of items

  // Login function
  const login = () => {
    setIsAuthenticated(true);
  };

  // Signout function
  const signout = () => {
    setIsAuthenticated(false);
  };

  // Add item to list
  const addItem = (item) => {
    setItems([...items, item]);
  };

  // Remove item from list
  const removeItem = (item) => {
    setItems(items.filter(i => i !== item));
  };

  // Clear all items from list
  const clearList = () => {
    setItems([]);
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        login,
        signout,
        items,
        addItem,
        removeItem,
        clearList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
