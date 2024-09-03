import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useSwipedProfiles } from "@/context/SwipedProfileContext";
import { useRouter } from "expo-router";
import { XCircleIcon } from "react-native-heroicons/outline"; // Import an icon for the close button

const MatchNotification: React.FC = () => {
  const { swipedProfiles, matchStatus } = useSwipedProfiles();
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
    const profile = swipedProfiles.find(
      (profile) => profile.name === matchStatus?.message.split(" ").pop()
    ); // Extract profile name
    console.log('in profile',profile);
    // if (profile) {
        
      router.push({
        pathname: "/chats",
        params: {
          pageType: "matches",
          name: `${notificationMessage.split(" ").pop()}`,
        //   imgUrl: profile.imgUrl,
          chat: JSON.stringify([]), // Start with an empty chat
        },
      });
    // }
    setNotificationVisible(false)
  };

  const handleClose = () => {
    setNotificationVisible(false);
  };

  return notificationVisible ? (
    <View className="absolute top-10 left-0 right-0 mx-4 bg-black bg-opacity-70 rounded-lg shadow-lg z-50 p-8">
      <TouchableOpacity
        className="absolute top-2 right-2 p-4"
        onPress={handleClose}
      >
        <XCircleIcon color="#fff" size={24} />
      </TouchableOpacity>
      <Text className="text-white text-lg font-bold mb-5 w-[80%]">
        {notificationMessage}
      </Text>
      {isNewMatch ? (
        <TouchableOpacity
          className="bg-blue-500 p-3 rounded-lg mt-2"
          onPress={handleSayHi}
        >
          <Text className="text-white text-center font-semibold">
            Say Hi to {notificationMessage.split(" ").pop()}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="bg-red-500 p-3 rounded-lg mt-2"
          onPress={handleClose}
        >
          <Text className="text-white text-center font-semibold">Close</Text>
        </TouchableOpacity>
      )}
    </View>
  ) : null;
};

export default MatchNotification;
