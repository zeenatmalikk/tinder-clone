import { SwipedProfilesProvider } from "@/context/SwipedProfileContext";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <SwipedProfilesProvider>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="chats" options={{ headerShown: false }} />
    </Stack>
    </SwipedProfilesProvider>
  );
}
