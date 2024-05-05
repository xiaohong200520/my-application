import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, FlatList } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import NewCard from "./components/Card";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
      <StatusBar backgroundColor="#fff" />
    </SafeAreaProvider>
  );
}

function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Navbar title="animation girl picture">
        <Search />
      </Navbar>
      <FlatList
        numColumns={2}
        data={arrayRange(1, 20, 1)}
        renderItem={(item) => (
          <View className="w-[50%] p-[5px]">
            <NewCard index={item.index} />
          </View>
        )}
        className="p-[5px] pt-0 flex-col odd:pr-[10px]"
        contentContainerStyle={{
          gap: 16,
        }}
      ></FlatList>
      <ScrollView></ScrollView>
    </View>
  );
}

const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
