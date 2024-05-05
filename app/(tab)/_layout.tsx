import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {
    return (
        <>
            <StatusBar hideTransitionAnimation='slide' style='dark' backgroundColor='#fff' />
            <MyTabs />
        </>
    );
}


const MyTabs = () => {

    return <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {
            <Tabs screenOptions={{ tabBarActiveTintColor: 'rgb(236, 72, 153)' }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'index',
                        headerShown: false,
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="modal"
                    options={{
                        title: 'Settings',
                        headerShown: false,
                        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                    }}
                />
            </Tabs>
        }
    </View>
}