import { chatData } from "@/constants";
import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { router } from "expo-router";

const Chat = () => {

  return (
    <SafeAreaView>
      <View className="px-4 border-b border-neutral-300">
        <Text className="uppercase font-semibold text-neutral-500 tracking-wider  py-4">
          Chat
        </Text>
      </View>
      <View className="px-4">
        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="w-full py-3 items-center flex-row border-b  border-neutral-300"
              onPress={() =>
                router.push({
                  pathname: "/(root)/chats",
                  params: {
                    pageType: "chat",
                    chat: JSON.stringify(item.chat),
                    imgUrl: item.imgUrl,
                    name: item.name,
                    age: item.age,
                  },
                })
              }
            >
              {/* Avatar */}
              <View
                className="w-[17%] justify-center"
                style={{
                  width: hp(7),
                  height: hp(7),
                }}
              >
                <Image
                  source={item.imgUrl}
                  style={{
                    width: "90%",
                    height: "90%",
                  }}
                  className="rounded-full"
                />
              </View>

              {/* Information */}
              <View
                className="w-[82%]"
                style={{
                  height: hp(6),
                }}
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row justify-center">
                    <View className="flex-row">
                      <Text className="font-bold text-base  ">
                        {item.name} {", "}
                      </Text>
                      <Text className="font-bold text-base mr-1">
                        {item.age}
                      </Text>
                    </View>
                    {item.isOnline && (
                      <View className=" justify-center items-center">
                        <View className="w-2 h-2 bg-general-100 rounded-full ml-1 justify-center items-center"></View>
                      </View>
                    )}
                  </View>
                  <Text className="text-sm tracking-tight">
                    {item.timeSent}
                  </Text>
                </View>
                <View>
                  <Text className="font-semibold text-xs text-neutral-500">
                    {item.chat[item.chat.length - 1].message.length > 45
                      ? item.chat[item.chat.length - 1].message.slice(0, 45) +
                        "..."
                      : item.chat[item.chat.length - 1].message}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Chat;
