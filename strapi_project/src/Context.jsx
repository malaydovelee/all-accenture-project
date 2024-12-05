import { createContext, useState, useContext, Children } from "react";

const AppContext = createContext();

export const AppProvider = ({Children}) => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 const openSidebar = () => {
    setIsSidebarOpen(true);
 }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
return (
    <AppContext.Provider 
    value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
 >
 {Children}
</AppContext.Provider>
);
};
export const useGlobalContext = () => {
   return useContext(AppContext); 
};