import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Search = () => {
  return (
    <Link href={{
      pathname: "/search/home",
    }} asChild>
      <Pressable>
        <View className="flex items-center justify-center rounded-full bg-[#ddd]/50 px-6 py-4">
          <Text
            className="w-full text-[18px] text-gray-400"
          >Search</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default Search;
