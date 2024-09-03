import React from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  ChevronLeftIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
  PhotoIcon,
} from "react-native-heroicons/outline";
const chats = () => {
  const searchParams = useLocalSearchParams();
  console.log(searchParams, "params");

  const { age, chat, imgUrl, name, pageType, date } = searchParams;

  const chatObj = JSON.parse(chat);

  return (
    <SafeAreaView className="flex-1">
      <View className="justify-between items-center flex-row w-full px-4 pb-2 border-b border-neutral-400">
        <TouchableOpacity
          className="w-2/3 flex-row items-center"
          onPress={() => router.push(`/${pageType}`)}
        >
          <ChevronLeftIcon size={hp(2.5)} color={"black"} strokeWidth={2} />
          <View className="border-2 rounded-full border-red-400 mr-2 ml-4">
            <Image
              source={imgUrl}
              style={{
                width: hp(4.5),
                height: hp(4.5),
              }}
              className="rounded-full"
            />
          </View>
          <View className="justify-center items-start">
            <Text className="font-bold text-base">
              {name}
              {", "}
              {age}
            </Text>
            <Text className="text-xs text-neutral-400">
              {date ? `You matched on ${date}` : ""}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View className="w-full h-full">
        {chatObj && (
          <FlatList
            data={chatObj}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{
              paddingBottom: hp(15),
            }}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: item.sender === "me" ? "row-reverse" : "row",
                  padding: 10,
                  paddingVertical: item.sender === "me" ? 13 : 3,
                }}
              >
                <View
                  style={{
                    width: "auto",
                    maxWidth: item.sender === "me" ? "70%" : "70%",
                  }}
                  className=""
                >
                  <View
                    style={{
                      borderBottomRightRadius: item.sender === "me" ? 0 : 10,
                      borderBottomLeftRadius: item.sender === "me" ? 10 : 0,
                      backgroundColor:
                        item.sender === "me" ? "#bc96ff" : "#371f7d",
                    }}
                    className="p-4 rounded-lg"
                  >
                    <Text
                      style={{
                        color: item.sender === "me" ? "#371f7d" : "#fff",
                      }}
                      className="text-white text-base leading-5 font-JakartaMedium"
                    >
                      {item.message}
                    </Text>
                  </View>

                  {item.sender === "me" && (
                    <Text className="text-xs font-semibold text-neutral-500 text-right">
                      {"Read "}
                      {item.timestamp}
                    </Text>
                  )}
                </View>
              </View>
            )}
          />
        )}
      </View>

      <View className="absolute flex-row justify-between items-center w-full px-4 pb-12 pt-2 bg-white bottom-0">
        <View className="flex-row items-center rounded-2xl bg-neutral-200 px-3 py-3 w-[85%] ">
          <TextInput
            placeholder="Write your message here"
            placeholderTextColor={"gray"}
            style={{
              fontSize: hp(1.7),
              fontWeight: "medium",
            }}
            className="flex-1 text-base mb-1 pl-1 tracking-wider"
          />

          <View className="flex-row justify-center items-center gap-1">
            <PhotoIcon color={"gray"} strokeWidth={2} />
            <FaceSmileIcon size={hp(2.5)} color={"gray"} strokeWidth={2} />
          </View>
        </View>

        <View className="bg-indigo-100 rounded-2xl py-3 w-[13%] justify-center items-center ">
          <PaperAirplaneIcon color={"white"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default chats;
