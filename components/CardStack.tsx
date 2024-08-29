import { chatData, chatDataProps, profileData } from "@/constants";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./Card";
import { View } from "react-native";

const CardStack = () => {
  const [newData, setNewData] = useState<chatDataProps[]>(chatData);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        {newData.map((item, index) => {
          return <Card item={item} index={index} />;
        })}
      </View>
    </SafeAreaView>
  );
};

export default CardStack;
