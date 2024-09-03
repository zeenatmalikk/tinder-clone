import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { profileData } from "@/constants";
import { useUser } from "@clerk/clerk-expo";
const Profile = () => {
  const data = profileData[0];
  const { user } = useUser();
  console.log(user, "userDetsss");
  return (
    <ScrollView
      className="relative bg-white flex-1"
      contentContainerStyle={{
        paddingBottom: hp(12),
      }}
    >
      <View>
        <Image
          source={data.imgUrl}
          style={{
            width: wp(100),
            height: hp(60),
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        />
      </View>

      <View className="w-full justify-start items-start px-6 space-y-4 mt-6">
        <View className="flex-row space-x-2 justify-between w-full items-center">
          <View className="flex-row ">
            <Text className="text-black text-center font-bold text-xl">
              {user?.emailAddresses[0].emailAddress}
            </Text>
            <Text className="text-black text-center font-bold text-xl ">
              {data.age}
            </Text>
          </View>
        </View>

        {/* User hobbies */}
        <View>
          <View className="flex-row">
            {data.hobbies?.map((hobby, index) => (
              <View
                key={index}
                style={{
                  borderRadius: 20,
                  padding: 5,
                  paddingHorizontal: 10,
                  marginRight: 5,
                }}
                className="bg-[#d3d3d3]"
              >
                <Text className="text-black ">{hobby}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* User Bio */}
        <View>
          <Text className="uppercase font-semibold text-neutral-500 tracking-wider mb-2 ">
            BIO
          </Text>

          <Text className="text-black/80 text-left font-medium text-sm">
            {data.bio}
          </Text>
        </View>

        {/*  */}
      </View>
    </ScrollView>
  );
};

export default Profile;
