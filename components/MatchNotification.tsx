import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useSwipedProfiles } from "@/context/SwipedProfileContext";
import { useRouter } from "expo-router";
import { formatDate } from "@/lib/utils";

const MatchNotification: React.FC = () => {
  const { matchStatus, resetMatchStatus } = useSwipedProfiles();
  const router = useRouter();

  // Handle notification state
  const [notificationVisible, setNotificationVisible] = React.useState(false);
  const [notificationMessage, setNotificationMessage] = React.useState("");

  useEffect(() => {
    if (matchStatus) {
      setNotificationMessage(matchStatus.message);
      setNotificationVisible(true);
    }
  }, [matchStatus]);

  const handleSayHi = () => {
    if (matchStatus && matchStatus.profile) {
      const profile = matchStatus.profile;

      router.push({
        pathname: "/chats",
        params: {
          pageType: "matches",
          name: profile.name,
          imgUrl: profile.imgUrl,
          chat: JSON.stringify([]),
          date: formatDate(),
        },
      });
      resetMatchStatus();
      setNotificationVisible(false);
    }
  };

  const handleClose = () => {
    setNotificationVisible(false);
  };

  return notificationVisible ? (
    <View
      className="absolute left-0 right-0 mx-4 bg-black bg-opacity-70 rounded-lg shadow-lg z-50 p-8"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <Text className="text-white text-lg font-bold mb-5">
        {notificationMessage}
      </Text>

      <View className="flex flex-row w-full gap-2">
        <TouchableOpacity
          className="bg-red-500  rounded-lg mt-2 w-[50%] flex items-center justify-center"
          onPress={handleClose}
        >
          <Text className="text-white text-center font-semibold">Close</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-primaryBg-100 p-3 rounded-lg mt-2 w-[50%]"
          onPress={handleSayHi}
        >
          <Text className="text-indigo-100 text-center font-JakartaBold">
            Say Hi to {notificationMessage.split(" ").pop()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : null;
};

export default MatchNotification;
