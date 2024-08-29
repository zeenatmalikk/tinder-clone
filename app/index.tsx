import { Redirect, Stack } from "expo-router";
import React from "react";
import 'react-native-gesture-handler';
const Home = () => {
  return <Redirect href={"/(root)/(tabs)/home"} />;
};

export default Home;
