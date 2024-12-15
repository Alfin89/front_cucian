import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function Account() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Bagian Avatar dan Email */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={80} color="#ccc" />
          </View>
          <Text style={styles.email}>Alfinkamil89@email.com</Text>
          
          {/* Tombol Edit Profil */}
          <TouchableOpacity style={styles.editButton}>
            <Feather name="edit-3" size={18} color="#fff" />
            <Text style={styles.editButtonText}>Edit Profil</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Opsi */}
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <Feather name="clock" size={20} color="black" />
            <Text style={styles.menuText}>Riwayat Pembayaran</Text>
            <MaterialIcons name="chevron-right" size={24} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Feather name="tag" size={20} color="black" />
            <Text style={styles.menuText}>Promosi Aktif</Text>
            <MaterialIcons name="chevron-right" size={24} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Feather name="help-circle" size={20} color="black" />
            <Text style={styles.menuText}>Bantuan & FAQ</Text>
            <MaterialIcons name="chevron-right" size={24} color="#ccc" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Feather name="shield" size={20} color="black" />
            <Text style={styles.menuText}>Kebijakan Privasi & Ketentuan</Text>
            <MaterialIcons name="chevron-right" size={24} color="#ccc" />
          </TouchableOpacity>
        </View>

        {/* Tombol Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Feather name="log-out" size={20} color="red" />
          <Text style={styles.logoutText}>Keluar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    marginTop: 10,
    fontSize: 16,
    color: '#555',
  },
  editButton: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  menu: {
    marginHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  menuText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  logoutText: {
    marginLeft: 5,
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
