import Navbar from "@/components/Navbar";
import { icons } from "@/constants";
import { Stack, Tabs } from "expo-router";
import { Dimensions, Image, ImageSourcePropType, useWindowDimensions, View } from "react-native";
import { heightPercentageToDP  as hp} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${
      focused ? "bg-general-300" : ""
    }`}
  >
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${
        focused ? "bg-primaryBg-100 text-white" : ""
      }`}
    >
      <Image
        source={source}
        tintColor={"white"}
        resizeMode="contain"
        className="w-7 h-7"
      />
    </View>
  </View>
);
export default function Layout() {
const { width } = useWindowDimensions();

  return (
    <View className="flex-1">
      <Navbar />
      <Tabs
        initialRouteName="index"
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#371f7d",
            borderRadius: 50,
            paddingBottom: 0,
            overflow: "hidden",
            marginHorizontal: 20,
            marginBottom: 20,
            height: hp(10),
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.home} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="matches"
          options={{
            title: "List",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.list} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.chat} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon source={icons.profile} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
