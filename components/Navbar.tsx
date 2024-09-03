import React from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Navbar = () => {
  const { signOut } = useAuth();
  const { width } = Dimensions.get("window");

  const handleLogout = () => {
    signOut();
    router.replace("/(auth)/sign-in");
  };

  return (
    <View
      style={{
        paddingHorizontal: width * 0.05, // 5% of screen width
        // Adjust for status bar height
      }}
      className="flex-row items-center justify-between px-4 pb-4 bg-indigo-100 pt-12"
    >
      <TouchableOpacity onPress={() => router.push("/profile")}>
        <Image
          style={{
            width: hp(6),
            height: hp(6),
          }}
          source={require("../assets/images/profile.jpg")}
          className="rounded-full border-2 border-white"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLogout}
        className="bg-primaryBg-100 px-5 py-2 rounded-md"
      >
        <Text className="text-sm text-white text-center font-JakartaBold ">
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
