import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function Orders() {
  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Aktif</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Selesai</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Order List */}
      <ScrollView style={styles.orderList}>
        {/* Pesanan 1 */}
        <View style={styles.orderCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.orderId}>#ORD-2024-001</Text>
            <Text style={[styles.status, styles.completed]}>Selesai</Text>
          </View>
          <Text style={styles.orderName}>Cuci + Setrika + Lipat</Text>
          <Text style={styles.orderDate}>15 Maret 2024</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.price}>Rp32.500</Text>
            <TouchableOpacity>
              <Text style={styles.viewDetails}>Lihat Detail</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Pesanan 2 */}
        <View style={styles.orderCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.orderId}>#ORD-2024-002</Text>
            <Text style={[styles.status, styles.inProgress]}>Sedang Diproses</Text>
          </View>
          <Text style={styles.orderName}>Dry Cleaning</Text>
          <Text style={styles.orderDate}>14 Maret 2024</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.price}>Rp45.000</Text>
            <TouchableOpacity>
              <Text style={styles.viewDetails}>Lihat Detail</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Pesanan 3 */}
        <View style={styles.orderCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.orderId}>#ORD-2024-003</Text>
            <Text style={[styles.status, styles.cancelled]}>Dibatalkan</Text>
          </View>
          <Text style={styles.orderName}>Cuci Kilat</Text>
          <Text style={styles.orderDate}>13 Maret 2024</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.price}>Rp28.999</Text>
            <TouchableOpacity>
              <Text style={styles.viewDetails}>Lihat Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.createOrderContainer}>
      <TouchableOpacity style={styles.createOrderButton}>
        <Text style={styles.createOrderText}>Buat Pesanan Baru</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: 'black',
  },
  tabText: {
    color: 'black',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: 'white',
  },
  orderList: {
    marginHorizontal: 10,
  },
  orderCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  orderId: {
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    fontSize: 12,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  completed: {
    backgroundColor: '#e6f5e9',
    color: '#3b9f53',
  },
  inProgress: {
    backgroundColor: '#e5ecff',
    color: '#4a67d1',
  },
  cancelled: {
    backgroundColor: '#fde8e8',
    color: '#d9534f',
  },
  orderName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  orderDate: {
    fontSize: 12,
    color: '#888',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  price: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 16,
  },
  viewDetails: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  createOrderContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  createOrderButton: {
    backgroundColor: 'black', 
    borderRadius: 25, 
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  createOrderText: {
    fontWeight: 'bold',
    color: 'white', 
    fontSize: 16,
  },

});
