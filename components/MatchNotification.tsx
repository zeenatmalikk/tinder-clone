import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useSwipedProfiles } from "@/context/SwipedProfileContext";
import { useRouter } from "expo-router";
import { formatDate } from "@/lib/utils";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const MatchNotification: React.FC = () => {
  const { matchStatus } = useSwipedProfiles();
  const router = useRouter();

  // Handle notification state
  const [notificationVisible, setNotificationVisible] = React.useState(false);
  const [notificationMessage, setNotificationMessage] = React.useState("");
  const [isNewMatch, setIsNewMatch] = React.useState(false);

  useEffect(() => {
    if (matchStatus) {
      setNotificationMessage(matchStatus.message);
      setNotificationVisible(true);
      setIsNewMatch(matchStatus.message.includes("Congratulations"));
    }
  }, [matchStatus]);

  const handleSayHi = () => {
    if (matchStatus && matchStatus.profile) {
      const profile = matchStatus.profile;

      router.push({
        pathname: "/chats",
        params: {
          pageType: "/home",
          name: profile.name,
          imgUrl: profile.imgUrl, // Pass the profile image URL
          chat: JSON.stringify([]),
          date: formatDate(),
        },
      });
    }
    setNotificationVisible(false);
  };

  const handleClose = () => {
    setNotificationVisible(false);
  };

  return notificationVisible ? (
    <View
      className="absolute left-0 right-0 mx-4 bg-black bg-opacity-70 rounded-lg shadow-lg z-50 p-8"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      {/* <TouchableOpacity
        className="absolute top-2 right-2 p-4"
        onPress={handleClose}
      >
        <XCircleIcon color="#fff" size={24} />
      </TouchableOpacity> */}
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
      {/* )} */}
    </View>
  ) : null;
};

export default MatchNotification;
