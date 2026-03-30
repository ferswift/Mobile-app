import { StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import ThemedView from "@/src/components/ThemedView";
import ThemedText from "@/src/components/ThemedText";
import ThemedButton from "@/src/components/ThemedButton";

import { register } from "@/src/services/authService";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    try {
      const user = await register(email, password);
      console.log("Registration successful:", user);
    } catch (error) {
      console.log("Registration error:", error);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Create your account</ThemedText>

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
        title="Register"
        onPress={handleRegister}
        style={{ margin: 20, alignItems: "center" }}
      />
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
});
