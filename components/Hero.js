import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function Hero() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        Discover Israel
      </Text>

      <Text style={styles.text}>
        Explore history, culture and beautiful landscapes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 15,
    color: "#1e3a8a",
  },

  text: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    color: "#475569",
  },
});