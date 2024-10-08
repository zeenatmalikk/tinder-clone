import CardStack from "@/components/CardStack";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView className="pt-48">
      <CardStack />
    </SafeAreaView>
  );
}
