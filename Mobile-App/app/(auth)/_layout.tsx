import React from "react";
import { Stack } from "expo-router";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "react-native";

const AuthLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      
    </Stack>
  );
};

export default AuthLayout;
