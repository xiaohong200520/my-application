import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View, ToastAndroid, Pressable } from "react-native";
import {
  SafeAreaProvider,
} from "react-native-safe-area-context";
import * as Clipboard from 'expo-clipboard'
import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AnimaImage } from "../../components/Card";
import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library';
import * as Hap from 'expo-haptics'

import moment from "moment";
import Navbar from "../../components/Navbar";

const Page = () => {
  const { id } = useLocalSearchParams();

  const [img, setAnimaImage] = useState<AnimaImage>();
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  useEffect(() => {
    fetch(`https://api.miaomc.cn/image/get?type=json&id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setAnimaImage(json);
      })
      .catch((error) => console.error(error))
      .finally(() => { });
  }, []);
  return (
    <View className="flex flex-1 flex-col">
      <Navbar type="back" title="View pictures">{null}</Navbar>
      <View className="m-4 overflow-hidden rounded-2xl">
        <Image className="h-[200px] w-full" src={img?.url} />
      </View>
      <View className="m-4 mt-0 flex flex-row  items-center justify-between ">
        <Text className="text-[16px] font-bold  uppercase"> Code:#{id}</Text>
        <Pressable
          className="rounded-full bg-pink-500 px-6 py-3 active:bg-pink-700 overflow-hidden"
          onPress={async () => {
            try {
              const file = await downloadResumable(img?.url as string).resumeAsync();
              if (permissionResponse?.status !== 'granted') {
                await requestPermission();
              }
              saveFile(file?.uri as string)
            } catch (e) {
              console.error(e);
            }
          }}>
          <Text className="font-bold uppercase text-white">download</Text>
        </Pressable>

      </View>
      <APICard
        url={`https://api.miaomc.cn/image/get?type=json&id=${id}`}
        title="API(JSON)"
      />
      <APICard
        url={`https://api.miaomc.cn/image/get?id=${id}`}
        title="API(Image)"
      />
      <APICard
        url={`<img src="https://api.miaomc.cn/image/get?id=${id}" alt="${id}" />`}
        title="HTML"
      />
      <StatusBar backgroundColor="#fff" />
    </View>
  );
};

const APICard = ({ title, url }: { title: string; url: string }) => {
  return (
    <View className="relative m-4 mt-0 flex overflow-hidden rounded-xl bg-white p-4">
      <View className="mb-4 flex flex-row items-center justify-between bg-white">
        <Text className="text-[16px] font-bold">{title}</Text>
        <TouchableOpacity onPress={async () => {
          await Clipboard.setStringAsync(url)
          ToastAndroid.show('复制API成功！！', ToastAndroid.SHORT);
          Hap.selectionAsync()

        }}>
          <Text className="text-[16px] font-bold text-pink-500">复制</Text>
        </TouchableOpacity>
      </View>
      <ScrollView alwaysBounceHorizontal horizontal>
        <Text className="w-full text-[16px] font-extralight">{url}</Text>
      </ScrollView>
    </View>
  );
};


const callback = (downloadProgress: { totalBytesWritten: number; totalBytesExpectedToWrite: number; }) => {
  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
  console.log(progress);

};

const downloadResumable = (url: string) => FileSystem.createDownloadResumable(
  url,
  FileSystem.documentDirectory + moment().format('YYYYMMDDhhmmss') + '.jpg',
  {},
  callback
);

const saveFile = async (fileUri: string) => {
  try {

    await MediaLibrary.saveToLibraryAsync(fileUri);
    ToastAndroid.show('已保存到相册！！', ToastAndroid.SHORT);

  } catch (err) {
    console.log("Save err: ", err)
    alert("Success, file was successfully downloaded!");

  }
}


export default Page;
