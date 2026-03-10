import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#21033F" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold", fontFamily: "sans-serif" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="about" options={{ title: "About Us" }} />
    </Stack>
  );
};

export default RootLayout;
