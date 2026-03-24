import { StyleSheet, TextInput, View } from "react-native";

// Themed Components
import ThemedView from "@/src/components/ThemedView";
import ThemedText from "@/src/components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "@/src/components/ThemedButton";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Login to your account</ThemedText>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ margin: 10, borderWidth: 1, padding: 10 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ margin: 10, borderWidth: 1, padding: 10 }}
      />

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

export default Login;

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
