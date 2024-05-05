import { Link, router } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { Button, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { StatusBar, setStatusBarBackgroundColor, setStatusBarStyle } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomePage = () => {
    const animation = useRef(null);
    useEffect(() => {
        // You can control the ref programmatically, rather than using autoPlay
        // animation.current?.play();
        setStatusBarBackgroundColor('#3aaafd', true)
        setStatusBarStyle('dark')
        setTimeout(() => {
            router.replace('(tab)')
        }, 2000)
    }, []);

    return (

        <View
            className='flex flex-1 justify-center items-center bg-[#3aaafd]'>
            <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: '#3aaafd',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../assets/Animation/DogAnimation.json')}
            />
            <Text className=' text-white text-[16px] font-bold'>Loadding...</Text>
        </View>
    )
}

export default HomePage