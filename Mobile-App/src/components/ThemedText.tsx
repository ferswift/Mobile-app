import { useColorScheme, Text } from "react-native";
import { Colors } from "@/src/constants/Colors";

interface ThemedTextProps {
  style?: object;
  children: React.ReactNode;
}

const ThemedText = ({ style, children, ...props }: ThemedTextProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  return (
    <Text style={[{ color: theme.text }, style]} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;
