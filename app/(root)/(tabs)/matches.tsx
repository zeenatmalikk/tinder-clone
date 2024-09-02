import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { images, matchesData } from "@/constants";
import { useRouter } from "expo-router";
import { useSwipedProfiles } from "@/context/SwipedProfileContext";

type Match = {
  imgUrl: string;
  name: string;
  lastName: string;
  age: number;
  city: string;
  country: string;
};

export default function MatchesList() {
  const router = useRouter();
  const { swipedProfiles } = useSwipedProfiles();

  const openChat = (match: Match) => {
    router.push({
      pathname: "/chats",
      params: {
        pageType: "matches",
        name: `${match.name} ${match.lastName}`,
        imgUrl: match.imgUrl,
        chat: JSON.stringify([]), // Start with an empty chat
      },
    });
  };

  return (
    <SafeAreaView>
      <View className="px-4 border-b border-neutral-300">
        <Text className="uppercase font-semibold text-neutral-500 tracking-wider py-4">
          Matches
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: hp(2),
          paddingBottom: hp(13),
          paddingTop: hp(2),
        }}
      >
        {swipedProfiles.length > 0 ? (
          swipedProfiles.map((match, index) => (
            <TouchableOpacity
              key={index}
              className="flex flex-row items-center space-x-4 mb-4"
              onPress={() => openChat(match)}
            >
              <View className="rounded-full">
                <Image
                  source={match.imgUrl}
                  style={{
                    width: hp(8),
                    height: hp(8),
                  }}
                  className="rounded-full"
                />
              </View>
              <View className="flex-1">
                <Text
                  className="text-neutral-800 font-bold"
                  style={{
                    fontSize: hp(2.2),
                  }}
                >
                  {match.name} {match.lastName}
                </Text>
                <Text
                  className="text-neutral-600"
                  style={{
                    fontSize: hp(1.8),
                  }}
                >
                  {match.age} years old
                </Text>
                <Text
                  className="text-neutral-600"
                  style={{
                    fontSize: hp(1.8),
                  }}
                >
                  {match.city}, {match.country}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View className="flex items-center">
            <Image
              source={images.noMatches} // Add your own image for no matches
              style={{ width: 200, height: 200, marginBottom: 20 }}
            />
            <Text className="text-2xl font-bold text-secondary-900 text-center">
              No Matches Yet
            </Text>
            <Text className="text-lg text-secondary-700 text-center mt-2">
              Start swiping to find your perfect match!
            </Text>
            <View className="mt-8">
              <Text className="text-base text-gray-500 text-center">
                You can go to home and explore more profiles.
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
