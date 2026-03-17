import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ButtonProps } from "../types/buttonProps";
import { Colors } from "../constants/Colors";

const ThemedButton = ({ title, style, onPress, ...props }: ButtonProps) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
        {...props}
      >
        <Text style={{ color: "#f2f2f2" }}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default ThemedButton;
