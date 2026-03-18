import { StyleSheet } from "react-native";
import ThemedView from "@/src/components/ThemedView";
import ThemedText from "@/src/components/ThemedText";

const create = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.heading}>Add a new book</ThemedText>
    </ThemedView>
  );
};

export default create;

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
