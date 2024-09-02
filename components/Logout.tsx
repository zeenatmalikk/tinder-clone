import { useAuth, SignedIn } from "@clerk/clerk-expo";
import { router } from "expo-router";
import { useEffect } from "react";
import { Pressable } from "react-native";
import { ArrowRightCircleIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp} from "react-native-responsive-screen";

const LogoutButton = () => {
  const { signOut } = useAuth();
  
  const doLogout = () => {
    signOut();
    router.replace("/(auth)/sign-in");
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <ArrowRightCircleIcon size={hp(3.5)} color="white" strokeWidth={1.5}/>
    </Pressable>
  );
};
export default LogoutButton;
