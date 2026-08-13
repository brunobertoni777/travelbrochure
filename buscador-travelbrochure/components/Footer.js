import { View, Text, StyleSheet } from 'react-native';

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
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#0038B8',
  },

  text: {
    color: 'white',
  },
});