import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      <Image source={require("../src/assets/img/expo2.png")} />
      <Text style={styles.title}>The number One</Text>
      <Text style={styles.p}>Reading List App</Text>
      <View>
        <Text style={styles.card}>Card Application</Text>
      </View>
      <Link href="/about" style={styles.about}>
        About Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: "#21033F",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 50,
    color: "#fff",
  },
  card: {
    backgroundColor: "#61DAFB",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    boxShadow: "0 4px 10px rgba(0,0,0,0.8)",
  },
  p: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  about: {
    color: "#fff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
