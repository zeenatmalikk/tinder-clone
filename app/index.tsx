import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import React from "react";
import "react-native-gesture-handler";
const Home = () => {
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }
  return <Redirect href={`/(auth)/sign-in`} />;
};

export default Home;
