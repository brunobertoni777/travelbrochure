import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

// Reusable card component for each section
function Card({ title, children }) {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={() => setPressed(!pressed)}
      style={({ pressed: isPressed }) => [
        styles.card,
        isPressed && styles.cardPressed,
      ]}
    >
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardContent}>{children}</View>
    </Pressable>
  );
}

export default function Main() {
  return (
    <View style={styles.main}>
      <Card title="History">
        <Text style={styles.text}>
          Jerusalem is one of the oldest cities in the world, sacred to
          Judaism, Christianity, and Islam. Israel's history spans thousands
          of years, full of ancient ruins, ancient kingdoms, and important
          archaeological sites.
        </Text>
      </Card>

      <Card title="Culture">
        <Text style={styles.text}>
          Israeli culture is a vibrant mix of traditions from around the
          world. Food plays a huge role in daily life. Don't miss trying:
        </Text>
        <Text style={styles.listItem}>• Hummus</Text>
        <Text style={styles.listItem}>• Falafel</Text>
        <Text style={styles.listItem}>• Shawarma</Text>
      </Card>

      <Card title="Weather">
        <Text style={styles.text}>
          Israel has a Mediterranean climate. Summers are hot and dry,
          winters are mild and rainy. Spring and autumn are pleasant with
          mild temperatures, perfect for sightseeing.
        </Text>
      </Card>

      <Card title="Body Language">
        <Text style={styles.text}>
          Israelis tend to communicate directly and openly. Eye contact is
          common and shows attentiveness. Hand gestures are frequently used
          to emphasize what is being said.
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardPressed: {
    opacity: 0.8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 8,
  },
  cardContent: {
    gap: 4,
  },
  text: {
    fontSize: 14,
    color: '#444444',
    lineHeight: 20,
  },
  listItem: {
    fontSize: 14,
    color: '#444444',
    marginLeft: 8,
    marginTop: 4,
  },
});