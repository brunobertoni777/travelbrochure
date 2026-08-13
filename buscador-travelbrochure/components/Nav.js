import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Nav({ search, setSearch }) {
  return (
    <View style={styles.nav}>
      <Text style={styles.title}>
        Israel Travel Brochure
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por título..."
        placeholderTextColor="#a9c0f5"
        value={search}
        onChangeText={setSearch}
        autoCapitalize="none"
        autoCorrect={false}
      />
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

  searchInput: {
    marginTop: 10,
    width: '100%',
    backgroundColor: '#ffffff20',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    color: 'white',
    borderWidth: 1,
    borderColor: '#ffffff40',
  },
});
