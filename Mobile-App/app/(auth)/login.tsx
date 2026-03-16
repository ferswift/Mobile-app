import { StyleSheet } from "react-native";

// Themed Components
import ThemedView from "@/src/components/ThemedView";
import ThemedText from "@/src/components/ThemedText";
import { Link } from "expo-router";

const login = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Login to your account</ThemedText>

      <Link href="/register" asChild>
        <ThemedText style={styles.registerNow}>
          Dont have an account? Sign up
        </ThemedText>
      </Link>
    </ThemedView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
  },
  registerNow: {
    textAlign: "center",
  },
});
