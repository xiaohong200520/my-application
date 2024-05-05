import { Slot, Stack } from "expo-router";
import { StatusBar, setStatusBarBackgroundColor, setStatusBarStyle } from "expo-status-bar";
import React, { useRef } from "react";
import { View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

const _layout = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <View className="flex-1" style={{ paddingTop: insets.top }}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              // Hide the header for all other routes.
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(tab)"
            options={{
              // Hide the header for all other routes.
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="review/[id]"
            options={{
              // Set the presentation mode to modal for our modal route.
              headerTitle: "View pictures",
              headerShown: false,
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="download"
            options={{
              // Set the presentation mode to modal for our modal route.
              headerTitle: "View pictures",
              presentation: "modal",
            }}
          />
          {/* <Stack.Screen
        name="search"
        options={{
          // Set the presentation mode to modal for our modal route.
          headerTitle: "View pictures",
        }}
      /> */}
        </Stack>
      </View>
    </SafeAreaProvider>

  );
};

export default _layout;
