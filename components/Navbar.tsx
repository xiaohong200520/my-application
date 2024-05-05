import React, { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const Navbar = ({
  title,
  children,
  type = 'nav'
}: {
  title: string;
  children?: ReactNode;
  type?: "nav" | "back"
}) => {
  return (
    type === 'nav' ? <View
      className=" flex w-full flex-col bg-white px-[10px] py-[16px] text-[#000]"
      style={{ gap: 20 }}
    >
      <Text className="text-center text-[23px] font-bold uppercase ">
        {title}
      </Text>
      {children}
    </View>
      :
      <View
        className=" flex w-full flex-row items-center bg-white px-[10px] py-[16px] text-[#000]"
        style={{ gap: 20 }}
      >
        <Pressable android_ripple={{
          color: "#bdbdbd",
          borderless: true
        }} onPress={() => router.back()}>
          <View className="h-[35px] w-[35px] flex justify-center items-center">
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
        </Pressable>
        <Text className="text-[23px] font-bold uppercase ">
          {title}
        </Text>
        <Text></Text>
      </View>


  );
};

export default Navbar;
