import { profilesData } from "@/constants";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./Card";
import { Platform, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { chatDataProps } from "@/types/type";
import MatchNotification from "./MatchNotification";

const CardStack = () => {
  const [newData, setNewData] = useState<chatDataProps[]>(profilesData);
  const [currentIndex, setCurrentIndex] = useState(0);

  //to adjsut the translate y and scla and opacity for card behinf
  const animatedValue = useSharedValue(0);
  let maxVisible = Platform.OS == "ios" ? 3 : 2;
  const offsetY = 10; // Vertical offset between stacked cards

  return (
    <SafeAreaView
      className="flex-1 justify-center items-center"
      style={{ marginTop: Platform.OS == "ios" ? 80 : 40 }}
    >
      <View className="flex-1 items-center justify-center">
        {newData.map((item, index) => {
          if (index > currentIndex + maxVisible || index < currentIndex) {
            return null;
          }
          return (
            <Card
              item={item}
              index={index}
              dataLength={newData.length}
              maxVisible={maxVisible}
              currentIndex={currentIndex}
              animatedValue={animatedValue}
              setCurrentIndex={setCurrentIndex}
              setNewData={setNewData}
              newData={newData}
              offsetY={offsetY}
            />
          );
        })}
      </View>
      <MatchNotification />
    </SafeAreaView>
  );
};

export default CardStack;
