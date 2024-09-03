import { chatData, matchesData, profileData } from "@/constants";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./Card";
import { Platform, TouchableOpacity, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { chatDataProps } from "@/types/type";
import MatchNotification from "./MatchNotification";
import { useSwipedProfiles } from "@/context/SwipedProfileContext";
import { ArrowRightCircleIcon } from "react-native-heroicons/outline";
const CardStack = () => {
  const [newData, setNewData] = useState<chatDataProps[]>(matchesData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { addSwipedProfile } = useSwipedProfiles(); // Use the context

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
      {/* <View className="flex-row justify-around mb-8">
        <TouchableOpacity
          className="bg-red-500 p-3 rounded-full"
          onPress={() => handleSwipe(-1)}
        >
          <ArrowRightCircleIcon size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-green-500 p-3 rounded-full"
          onPress={() => handleSwipe(1)}
        >
          <ArrowRightCircleIcon size={40} color="white" />
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
};

export default CardStack;
