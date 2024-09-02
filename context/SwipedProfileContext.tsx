import React, { createContext, useContext, useState } from "react";
import { chatDataProps } from "../types/type";

type SwipedProfilesContextType = {
  swipedProfiles: chatDataProps[];
  addSwipedProfile: (profile: chatDataProps) => void;
};

const SwipedProfilesContext = createContext<
  SwipedProfilesContextType | undefined
>(undefined);

export const SwipedProfilesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [swipedProfiles, setSwipedProfiles] = useState<chatDataProps[]>([]);

  const addSwipedProfile = (profile: chatDataProps) => {
    setSwipedProfiles((prev) => [...prev, profile]);
  };

  return (
    <SwipedProfilesContext.Provider
      value={{ swipedProfiles, addSwipedProfile }}
    >
      {children}
    </SwipedProfilesContext.Provider>
  );
};

export const useSwipedProfiles = () => {
  const context = useContext(SwipedProfilesContext);
  if (!context) {
    throw new Error(
      "useSwipedProfiles must be used within a SwipedProfilesProvider"
    );
  }
  return context;
};
