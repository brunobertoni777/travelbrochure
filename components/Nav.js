import { View, Text, StyleSheet } from "react-native";

export default function Nav() {
  return (
    <View style={styles.nav}>
      <Text style={styles.title}>
        Israel Travel Brochure
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#2563eb",
    padding: 20,
    alignItems: "center",
  },

  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});