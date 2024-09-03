import React, { createContext, useContext, useState } from "react";
import { chatDataProps } from "../types/type";

type SwipedProfilesContextType = {
  swipedProfiles: chatDataProps[];
  addSwipedProfile: (profile: chatDataProps) => boolean;
  matchStatus: { profile: chatDataProps | null; message: string } | null;
  resetMatchStatus: () => void; 

};

const SwipedProfilesContext = createContext<
  SwipedProfilesContextType | undefined
>(undefined);

export const SwipedProfilesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [swipedProfiles, setSwipedProfiles] = useState<chatDataProps[]>([]);
  const [matchStatus, setMatchStatus] = useState<{
    profile: chatDataProps | null;
    message: string;
  } | null>(null);

  const addSwipedProfile = (profile: chatDataProps) => {
    const isAlreadyMatched = swipedProfiles.some((p) => p.id === profile.id);
    if (isAlreadyMatched) {
      setMatchStatus({
        profile,
        message: `💃You already matched with ${profile.name}!`,
      });
      return false;
    } else {
      setSwipedProfiles((prev) => [...prev, profile]);
      setMatchStatus({
        profile,
        message: `Congratulations 🎉, it's a match with ${profile.name}!`,
      });
      return true;
    }
  };

  const resetMatchStatus = () => {
    setMatchStatus(null); 
  };
  return (
    <SwipedProfilesContext.Provider
      value={{ swipedProfiles, addSwipedProfile, matchStatus ,resetMatchStatus}}
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
