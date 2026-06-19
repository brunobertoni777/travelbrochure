import React, { useState } from 'react';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Modal,
  Image,
} from 'react-native';

const data = [
  {
    id: '1',
    title: 'History',
    image: require('../assets/history.jpg'),
    content:
      "Jerusalem is one of the oldest cities in the world, sacred to Judaism, Christianity, and Islam. Israel's history spans thousands of years, full of ancient ruins, ancient kingdoms, and important archaeological sites.",
  },

  {
    id: '2',
    title: 'Culture',
    image: require('../assets/culture.jpg'),
    content:
      "Israeli culture is a vibrant mix of traditions from around the world. Food plays a huge role in daily life. Don't miss trying Hummus, Falafel and Shawarma.",
  },

  {
    id: '3',
    title: 'Weather',
    image: require('../assets/clima.jpg'),
    content:
      'Israel has a Mediterranean climate. Summers are hot and dry, winters are mild and rainy. Spring and autumn are pleasant with mild temperatures, perfect for sightseeing.',
  },

  {
    id: '4',
    title: 'Body Language',
    image: require('../assets/bodylenguaje.jpg'),
    content:
      'Israelis tend to communicate directly and openly. Eye contact is common and shows attentiveness. Hand gestures are frequently used to emphasize what is being said.',
  },
];

export default function Main() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const abrirCard = (item) => {
    setSelectedCard(item);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => abrirCard(item)}
            style={({ pressed }) => [
              styles.card,
              {
                opacity: pressed ? 0.8 : 1,
              },
            ]}
          >
            <Image
              source={item.image}
              style={styles.cardImage}
            />

            <Text style={styles.cardTitle}>
              {item.title}
            </Text>
          </Pressable>
        )}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {selectedCard && (
              <>
                <Image
                  source={selectedCard.image}
                  style={styles.modalImage}
                />

                <Text style={styles.modalTitle}>
                  {selectedCard.title}
                </Text>

                <Text style={styles.modalText}>
                  {selectedCard.content}
                </Text>

                <Pressable
                  onPress={() => setModalVisible(false)}
                  style={({ pressed }) => [
                    styles.closeButton,
                    {
                      opacity: pressed ? 0.7 : 1,
                    },
                  ]}
                >
                  <Text style={styles.closeText}>
                    Close
                  </Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 15,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  cardImage: {
    width: '100%',
    height: 180,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0038B8',
    padding: 15,
    textAlign: 'center',
  },

  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },

  modalImage: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 15,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0038B8',
    marginBottom: 10,
  },

  modalText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },

  closeButton: {
    backgroundColor: '#0038B8',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
  },

  closeText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});