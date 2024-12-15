import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Account() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <Text style={styles.text}>Management Akun</Text>
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
