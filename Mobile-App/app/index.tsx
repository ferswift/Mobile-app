import { Link } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import ThemedView from "@/src/components/ThemedView";
import ThemedText from "@/src/components/ThemedText";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <Image source={require("../src/assets/img/expo2.png")} />

      <ThemedText style={styles.title}>The number One</ThemedText>

      <ThemedText style={styles.p}>Expo App</ThemedText>

      <View>
        <ThemedText style={styles.card}>Navigate, Become one of us.</ThemedText>
      </View>

      <Link href="/login" style={styles.about}>
        <ThemedText>Login</ThemedText>
      </Link>
      <Link href="/register" style={styles.about}>
        <ThemedText>Register</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 50,
  },

  card: {
    backgroundColor: "#61DAFB",
    color: "#000",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 15,
    fontFamily: "sans-serif",

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },

  p: {
    fontSize: 20,
    fontWeight: "bold",
  },

  about: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
