import { Link } from "expo-router";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import ThemedView from "@/src/components/ThemedView";
import ThemedText from "@/src/components/ThemedText";

export default function About() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.containerText}>
        <ThemedText style={styles.title}>Thanks for choosing us !</ThemedText>

        <ThemedText style={styles.description}>
          Contact Us for more information about our services and how we can help
          you build your next mobile application using React Native.
        </ThemedText>

        <View style={styles.containerInput}>
          <TextInput placeholder="your name" style={styles.input} />
          <TextInput placeholder="your email" style={styles.input} />
          <TextInput placeholder="your message" style={styles.input} />
          <TextInput placeholder="cell phone" style={styles.input} />

          <Pressable style={styles.button}>
            <ThemedText>Send info</ThemedText>
          </Pressable>
        </View>

        <Link href="/" style={styles.about}>
          <ThemedText>Back to Home</ThemedText>
        </Link>
      </ThemedView>
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
  containerInput: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 10,
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
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    color: "#fff",
  },

  button: {
    marginTop: 10,
    backgroundColor: "#6849a7",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});
