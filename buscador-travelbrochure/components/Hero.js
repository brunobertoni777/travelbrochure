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
    padding: 1,
  },

  image: {
    width: '80%',
    height: 180,
    borderRadius: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 1,
  },

  subtitle: {
    color: '#555',
    textAlign: 'center',
    marginTop: 2,
  },
});