import { View, Text, StyleSheet } from 'react-native';

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
    backgroundColor: '#0038B8',
    padding: 15,
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});