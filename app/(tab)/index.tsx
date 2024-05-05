import {
  Text,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  Pressable,
} from "react-native";
import NewCard from "../../components/Card";
import Navbar from "../../components/Navbar";
import Search from "../../components/Search";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Page() {
  return (
    <View className="flex-1">
      <HomeScreen />
    </View>
  );
}

function HomeScreen() {
  const [total] = useState<number>(780);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [isBackTop, setIsBackTop] = useState(false)
  let Flat: FlatList<number> | null = null

  const onScroll = (e: { nativeEvent: { contentOffset: { y: number } } }) => {
    if (e.nativeEvent.contentOffset.y >= 200) {
      setIsBackTop(true)
    } else {
      setIsBackTop(false)
    }
  }


  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Navbar title="animation girl picture">
        <Search />
      </Navbar>
      <FlatList
        ref={(e) => {
          Flat = e
        }}
        numColumns={2}
        data={arrayRange(1, limit * page, 1)}
        onScroll={onScroll}
        refreshControl={
          refresh(() => setPage(0))
        }
        renderItem={(item) => (
          <View className="w-[50%] p-[5px] py-0">
            <NewCard
              index={item.index}
              setLoading={(loading: boolean) => setLoading(loading)}
            />
          </View>
        )}
        ListFooterComponent={
          !(total <= limit * page) ? (
            <View className="flex flex-row items-center justify-center gap-4 py-4 px-0">
              <ActivityIndicator color={"rgb(236, 72, 153)"} />
              <Text>加载中。。。</Text>
            </View>
          ) : (
            <View className="flex flex-row items-center justify-center gap-4 p-4 py-0">
              <Text>没有更多了。。。</Text>
            </View>
          )
        }
        onEndReached={() => {
          console.log('jfhdjhjh');

          if (total <= limit * page) return;
          setPage(page + 1);
        }}
        onEndReachedThreshold={0.1}
        onStartReached={null}
        className="flex-col p-[5px] pt-0"
        contentContainerStyle={{
          gap: 10,
        }}
      ></FlatList>
      {isBackTop && <Pressable
        onPress={() => {
          Flat?.scrollToOffset({ offset: 0, animated: true })
        }}
        className="w-[45px] h-[45px] rounded-full flex justify-center items-center bg-white shadow-md shadow-black absolute bottom-[16px] right-[16px]">
        <AntDesign name="up" size={24} color="black" />
      </Pressable>}
    </View>
  );
}

const arrayRange = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (value, index) => {
    return start + index * step;
  });

const refresh = (onRefresh: () => void) => <RefreshControl
  colors={[
    "rgb(59, 130, 246)",
    "rgb(239, 68, 68)",
    "orange"
  ]}
  refreshing={false}
  onRefresh={onRefresh}
/>