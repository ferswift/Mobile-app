import { StyleSheet } from "react-native";
import ThemedView from "@/src/components/ThemedView";
import ThemedText from "@/src/components/ThemedText";

const Profile = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading}>Your Email</ThemedText>

      <ThemedText>Time to start reading some books...</ThemedText>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
