import { useColorScheme, View } from "react-native";
import { Colors } from "@/src/constants/Colors";

interface ThemedViewProps {
  style?: object;
  children: React.ReactNode;
}

const ThemedView = ({ style, children, ...props }: ThemedViewProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemedView;
