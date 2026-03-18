import React from "react";
import { Stack } from "expo-router";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "react-native";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
        headerTitleStyle: { fontWeight: "bold", fontFamily: "sans-serif" },
      }}
    >
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About Us" }} />
      <Stack.Screen name="contact" options={{ title: "Contact us" }} />
    </Stack>
  );
};

export default RootLayout;
