import { Link } from "expo-router";
import { StyleSheet, View, Image } from "react-native";
import ThemedView from "@/src/components/ThemedView";
import ThemedText from "@/src/components/ThemedText";

export default function About() {
  return (
    <ThemedView style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />

      <View style={styles.containerText}>
        <ThemedText style={styles.title}>About React Native</ThemedText>

        <ThemedText style={styles.description}>
          React Native is a popular framework for building mobile applications
          using JavaScript and React. It allows developers to create
          cross-platform apps that run on both iOS and Android using a single
          codebase. React Native provides a rich set of components and APIs that
          enable developers to build high-quality mobile applications with a
          native look and feel.
        </ThemedText>

        <Link href="/" style={styles.about}>
          <ThemedText>Back to Home</ThemedText>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },

  containerText: {
    maxWidth: 350,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },

  about: {
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 20,
  },
});
