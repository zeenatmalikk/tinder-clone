import { chatData } from "@/constants";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { router } from "expo-router";
import { useSwipedProfiles } from "@/context/SwipedProfileContext";
import { ChatBubbleLeftEllipsisIcon } from "react-native-heroicons/outline";

const Chat = () => {
  const { swipedProfiles } = useSwipedProfiles();

  const filteredChatData = chatData.filter((profile) =>
    swipedProfiles.some((swipedProfile) => swipedProfile.id === profile.id)
  );

  return (
    <View>
      <View className="px-4 border-b border-neutral-300">
        <Text className="uppercase font-semibold text-neutral-500 tracking-wider py-4">
          Chats
        </Text>
      </View>
      <View className="px-4">
        {filteredChatData.length > 0 ? (
          <FlatList
            data={filteredChatData}
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
        ) : (
          <View
            className="flex justify-center items-center"
            style={{
              height: hp(50),
            }}
          >
            <ChatBubbleLeftEllipsisIcon color={"#371f7d"} size={160} />
            <Text
              style={{
                fontSize: hp(3),
              }}
              className="font-bold text-secondary-900 text-center"
            >
              No chats yet
            </Text>
            <Text
              style={{
                fontSize: Platform.OS == "ios" ? hp(2) : hp(2.3),
              }}
              className="text-neutral-500 text-center w-[80%] font-JakartaBold"
            >
              Start swiping to find matches and start chatting!
            </Text>
            <View className="mt-8">
              <Text
                style={{
                  fontSize: hp(2.1),
                }}
                className="text-base text-gray-500 text-center"
              >
                You can go to home and explore more profiles.
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Chat;
