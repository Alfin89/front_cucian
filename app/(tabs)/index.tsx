import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import axios from 'axios';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [laundries, setLaundries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaundries = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/laundries'); // Ubah ke IP perangkat
        if (response.data && response.data.length > 0) {
          setLaundries(response.data); // Simpan data di state
        } else {
          console.warn('Data kosong dari API!');
        }
      } catch (error) {
        console.error('Error fetching laundries:', error);
      } finally {
        setLoading(false); // Set loading selesai
      }
    };

    fetchLaundries();
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Bagian Header */}
      <View style={styles.headerContainer}>
        <ImageBackground
          source={require('@/assets/images/banner.jpg')}
          style={styles.header}
          imageStyle={styles.headerImage}
        >
          <View style={styles.headerOverlay}>
            <ThemedText type="title" style={styles.headerText}>
              30% OFF on Your First Order!
            </ThemedText>
          </View>
        </ImageBackground>
      </View>

      {/* Kartu Order Now */}
      <TouchableOpacity style={styles.orderNowButton}>
        <ThemedText style={styles.orderNowButtonText}>Pesan Sekarang</ThemedText>
      </TouchableOpacity>

      {/* Bagian Latest Orders */}
      <View style={styles.latestOrders}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          Laundry Terdekat
        </ThemedText>

        {/* Loader saat loading */}
        {loading ? (
          <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
        ) : laundries.length > 0 ? (
          <FlatList
            data={laundries}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <LaundryCard
                name={item.name}
                address={item.address}
                phone={item.phone_number}
                email={item.email}
              />
            )}
          />
        ) : (
          <ThemedText style={styles.emptyText}>
            Tidak ada data laundry tersedia. Silakan coba lagi nanti.
          </ThemedText>
        )}
      </View>

      {/* Bagian Promo di Footer */}
      <View style={styles.promo}>
        <ThemedText type="defaultSemiBold" style={styles.promoText}>
          Don't miss out on our exclusive offers!
        </ThemedText>
      </View>
    </ScrollView>
  );
}

// Komponen LaundryCard untuk menampilkan detail laundry
function LaundryCard({ name, address, phone, email }) {
  return (
    <ThemedView style={[styles.laundryCard, styles.shadow]}>
      <ThemedText style={styles.laundryText}>🏢 {name}</ThemedText>
      <ThemedText style={styles.laundryText}>📍 {address}</ThemedText>
      <ThemedText style={styles.laundryText}>📞 {phone}</ThemedText>
      <ThemedText style={styles.laundryText}>✉️ {email}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfa',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  headerContainer: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 10,
  },
  header: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerImage: {
    resizeMode: 'cover',
  },
  headerOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 16,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  orderNowButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    alignItems: 'center',
    marginVertical: 16,
  },
  orderNowButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  latestOrders: {
    marginBottom: 16,
  },
  sectionTitle: {
    marginBottom: 8,
    fontSize: 18,
    color: '#555555',
  },
  loader: {
    marginVertical: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#999999',
    textAlign: 'center',
    marginVertical: 16,
  },
  laundryCard: {
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 8,
  },
  laundryText: {
    fontSize: 14,
    color: '#333333',
  },
  promo: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#d1f5d3',
    borderRadius: 8,
  },
  promoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2b7a0b',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
});
