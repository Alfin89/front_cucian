import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Promos() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Promosi Tersedia</Text>

        {/* Kartu Promosi 1 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.promoTitle}>20% Off Kiloan</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>SAVE20</Text>
            </View>
          </View>
          <Text style={styles.description}>
            Hemat besar untuk semua layanan laundry kiloan
          </Text>
          <Text style={styles.validity}>Berlaku hingga 31 Des 2024</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Gunakan Sekarang</Text>
          </TouchableOpacity>
        </View>

        {/* Kartu Promosi 2 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.promoTitle}>Gratis Pengiriman</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>FREEDEL</Text>
            </View>
          </View>
          <Text style={styles.description}>
            Gratis pengiriman untuk pesanan di atas 20.000
          </Text>
          <Text style={styles.validity}>Berlaku hingga 15 Jan 2024</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Gunakan Sekarang</Text>
          </TouchableOpacity>
        </View>

        {/* Kartu Promosi 3 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.promoTitle}>Diskon 30% Pesanan Pertama</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>FIRST30</Text>
            </View>
          </View>
          <Text style={styles.description}>
            Diskon spesial untuk pelanggan baru
          </Text>
          <Text style={styles.validity}>Berlaku hingga 28 Feb 2024</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Gunakan Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  badge: {
    backgroundColor: '#E0E0E0',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  validity: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
