import { useSwipedProfiles } from "@/context/SwipedProfileContext";
import { chatDataProps } from "@/types/type";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { MapPinIcon } from "react-native-heroicons/outline";
import Animated, {
  interpolate,
  runOnJS,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
type Props = {
  item: chatDataProps;
  index: number;
  dataLength: number;
  maxVisible: number;
  currentIndex: number;
  animatedValue: SharedValue<number>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setNewData: React.Dispatch<React.SetStateAction<chatDataProps[]>>;
  newData: chatDataProps[];
  offsetY: number;
};
const Card = ({
  item,
  index,
  dataLength,
  maxVisible,
  currentIndex,
  animatedValue,
  setCurrentIndex,
  setNewData,
  newData,
}: Props) => {
  const { width } = useWindowDimensions();
  const screenHeight = Dimensions.get("window").height;

  const { addSwipedProfile } = useSwipedProfiles(); // Use the context
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const translateX = useSharedValue(0);
  //to store the swipe direction where 1 is right and -1 is left
  const direction = useSharedValue(0);

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      const isSwipeRight = e.translationX > 0;
      direction.value = isSwipeRight ? 1 : -1;
      console.log(e.translationX);
      if (currentIndex == index) {
        //to slie donly first card
        translateX.value = e.translationX;
        animatedValue.value = interpolate(
          Math.abs(e.translationX),
          [0, width],
          [index, index + 1]
        );
      }
      //set the onendcall back to call the function when the finger gesture finishes
    })
    .onEnd((e) => {
      if (currentIndex == index) {
        // if transaltex is greater than 150 then only it shuld be liked or passed else it should return to its original position
        if (Math.abs(e.translationX) > 150 || Math.abs(e.velocityX) > 1000) {
          //velocityX is greater than 1000 the card wll be fully swiped
          //Velocity x is velocity of the pan gesture along hte X axis in the current moment
          translateX.value = withTiming(width * direction.value, {}, () => {
            //increment the value on the current index to the next index
            runOnJS(setCurrentIndex)(currentIndex + 1);
            runOnJS(setNewData)([...newData, newData[currentIndex]]);
          });
          //if swiped right add it in context
          if (direction.value == 1) {
            runOnJS(addSwipedProfile)(item);
          }

          animatedValue.value = withTiming(currentIndex + 1);
        } else {
          translateX.value = withTiming(0, { duration: 500 });
          animatedValue.value = withTiming(currentIndex);
        }
      }
    });
  const animatedStyle = useAnimatedStyle(() => {
    const currentItem = index == currentIndex;
    //animating rotate z using interpolate based on the value of translate x
    const rotateZ = interpolate(
      Math.abs(translateX.value),
      [0, width],
      [0, 20]
    );
    //animating translate y based on animatedvale using interpolate
    const translateY = interpolate(
      animatedValue.value,
      [index - 1, index],
      [-30, 0]
    );
    const scale = interpolate(
      animatedValue.value + maxVisible,
      [index, index + 1],
      [1, 1]
    );
    const opacity = interpolate(
      animatedValue.value,
      [index - 1, index],
      [0.9, 1]
    );
    return {
      transform: [
        { translateX: translateX.value },
        {
          scale: currentItem ? 1 : scale,
        },
        {
          //to move the stack down after sliding
          translateY: currentItem ? 0 : translateY,
        },
        {
          rotateZ: currentItem ? `${direction.value * rotateZ}deg` : "0deg",
        },
      ],
      opacity: index < maxVisible + currentIndex ? 1 : opacity,
    };
  });
  const likeOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translateX.value, [0, width / 6], [0, 1]),
    };
  });

  const nopeOpacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translateX.value, [-width / 6, 0], [1, 0]),
    };
  });
  const cardWidth = width * 0.8; // 90% of the screen width
  const cardHeight = screenHeight * 0.5; //50% of the screen height

  return (
    <>
      <GestureDetector gesture={pan}>
        <Animated.View
          className="absolute w-[360px] h-[450px] rounded-md"
          style={[
            {
              zIndex: dataLength - index,
              width: cardWidth,
              height: cardHeight,
              alignSelf: "center",
            },
            animatedStyle,
          ]}
          key={item.id}
        >
          <View className="relative">
            <Image
              source={item.imgUrl}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 15,
              }}
            />

            <View className="absolute bottom-5 left-1 w-full px-4 py-2 rounded-lg">
              <Text className="text-white font-JakartaBold text-3xl flex items-center">
                {item.name},{" "}
                <Text className="text-2xl font-JakartaMedium">{item.age}</Text>
              </Text>
              <View className="flex w-full mt-2">
                <Text className="text-white font-JakartaSemiBold text-lg flex items-center">
                  <MapPinIcon color="#fff" className="mr-1" />
                  <Text>{item.city}, </Text>
                  <Text className="text-gray-300">{item.country}</Text>
                </Text>
                <Text className="text-white font-JakartaMedium text-base mt-2 w-7/10">
                  {item.bio}
                </Text>
              </View>
            </View>

            <Animated.View
              className="absolute top-2 left-2"
              style={likeOpacity}
            >
              <Image
                source={require("../assets/images/LIKE.png")}
                style={{ width: 150, height: 100 }}
              />
            </Animated.View>

            {/* Nope Image */}
            <Animated.View
              className="absolute top-2 right-2"
              style={nopeOpacity}
            >
              <Image
                source={require("../assets/images/nope.png")}
                style={{ width: 150, height: 100 }}
              />
            </Animated.View>
          </View>
        </Animated.View>
      </GestureDetector>
    </>
  );
};

export default Card;
