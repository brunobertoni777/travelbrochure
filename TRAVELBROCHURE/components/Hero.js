import { View, Text, Image, StyleSheet } from 'react-native';

export default function Hero() {
  return (
    <View style={styles.container}>
    <Image
      source={require('../assets/israel.jpg')}
      style={styles.image}
/>
      <Text style={styles.title}>
        Discover Israel
      </Text>

      <Text style={styles.subtitle}>
        Explore history, culture and traditions.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },

  subtitle: {
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
});