import React, { useEffect, useState } from "react";
import * as Hap from 'expo-haptics'
import { Text, View, Image, Pressable } from "react-native";
import { Link } from "expo-router";

export interface AnimaImage {
  code: number;
  id: number;
  url: string;
}

const NewCard = ({
  index,
  setLoading,
}: {
  index: number;
  setLoading: (loading: boolean) => void;
}) => {
  //   const img = await fetch("https://www.dmoe.cc/random.php?return=json");
  const [img, setAnimaImage] = useState<AnimaImage>();
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.miaomc.cn/image/get?type=json&id=${index}`)
      .then((response) => response.json())
      .then((json) => {
        setAnimaImage(json);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Link
      href={{
        pathname: "/review/[id]",
        params: {
          id: img?.id,
        },
      }}
      asChild
    >
      <Pressable onPress={
        () => {
          Hap.selectionAsync()
        }
      }>
        <View className="relative flex w-full flex-col overflow-hidden rounded-2xl  bg-white shadow-sm shadow-black">
          <Image
            className="h-[180px] w-full bg-gray-100"
            src={img?.url}
            alt={`#${index}`}
          />
          <Text className="absolute bottom-0 w-full bg-black/25 p-4 text-[16px] font-bold uppercase text-white">
            Code:#{index}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default NewCard;
