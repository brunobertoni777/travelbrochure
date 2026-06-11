import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        Made with React Native and Expo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 25,
    alignItems: "center",
  },

  text: {
    color: "#64748b",
    fontSize: 14,
  },
});