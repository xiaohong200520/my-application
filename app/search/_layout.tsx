import { Stack } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'
const _layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="home"
                options={{
                    // Hide the header for all other routes.
                    headerShown: false,
                }}
            />
        </Stack>
    )
}

export default _layout