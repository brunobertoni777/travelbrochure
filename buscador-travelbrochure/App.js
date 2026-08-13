import { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Nav search={search} setSearch={setSearch} />
        <Main search={search} />
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
});