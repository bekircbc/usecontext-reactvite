import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const companyName = "Hamburg Robotics";

  return (
    <AppContextProvider value={{ companyName }}>{children}</AppContextProvider>
  );
};
