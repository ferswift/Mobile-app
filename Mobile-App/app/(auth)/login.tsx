import { StyleSheet, View } from "react-native";

// Themed Components
import ThemedView from "@/src/components/ThemedView";
import ThemedText from "@/src/components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "@/src/components/ThemedButton";

const login = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Login to your account</ThemedText>

      <ThemedButton
        title="Login"
        style={{ margin: 20, alignItems: "center" }}
        onPress={() => console.log("Login pressed")}
      />
      <View style={{ marginTop: 70 }}>
        <Link href="/register" asChild>
          <ThemedText style={styles.registerNow}>
            Dont have an account? <View style={styles.signUp}>Sign up</View>
          </ThemedText>
        </Link>
      </View>
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
  signUp: {
    backgroundColor: "#293293",
    padding: 10,
    borderRadius: 5,
  },
});
