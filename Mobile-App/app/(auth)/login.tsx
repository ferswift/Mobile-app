import { StyleSheet, TextInput, View } from "react-native";

// Themed Components
import ThemedView from "@/src/components/ThemedView";
import ThemedText from "@/src/components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "@/src/components/ThemedButton";
import { useState } from "react";

import { login } from "@/src/services/authService";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      console.log("Logged in user:", user);
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Login to your account</ThemedText>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          margin: 10,
          borderWidth: 1,
          padding: 10,
          color: "#fff",
          width: "50%",
          textAlign: "center",
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          margin: 10,
          borderWidth: 1,
          padding: 10,
          color: "#fff",
          width: "50%",
          textAlign: "center",
        }}
      />

      <ThemedButton
        title="Login"
        style={{ margin: 20, alignItems: "center" }}
        onPress={handleLogin}
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
    alignItems: "center",
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
