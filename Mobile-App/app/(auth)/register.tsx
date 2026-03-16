import { StyleSheet } from "react-native";
import React from "react";
import ThemedView from "@/src/components/ThemedView";
import ThemedText from "@/src/components/ThemedText";

const register = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>register</ThemedText>
    </ThemedView>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
  },
});
