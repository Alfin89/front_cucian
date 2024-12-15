import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Promos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promotions</Text>
      <Text style={styles.text}>Halaman Promosi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
});
