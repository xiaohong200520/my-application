import React from 'react'
import { View, Text } from 'react-native'

const Sc = () => {
  return (
    <View className='w-full bg-gray-300 flex flex-row'>
        <View className='flex-1 px-[16px] flex flex-row items-center'>
            <Text>占位符</Text>
        </View>
        <View className='w-[45px] h-[45px] bg-blue-600 flex justify-center items-center'>
            <Text className='text-white'>搜索</Text>
        </View>
    </View>
  )
}

export default Sc