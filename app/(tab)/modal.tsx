import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import Navbar from "../../components/Navbar";
export default function Modal() {
  return (
    <View style={{ flex: 1 }}>
      <Navbar title="Setting">{null}</Navbar>
      <Text>modl</Text>
    </View>
  );
}
