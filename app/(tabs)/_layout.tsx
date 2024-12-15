import { useNavigation } from 'expo-router';
import React from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <>
      {/* Bar Atas */}
      <View style={styles.topBar}>
        <Text style={styles.logoText}>Cucian</Text>
        <View style={styles.iconContainer}>
          {/* Bell Icon dengan Navigasi */}
          <TouchableOpacity onPress={() => navigation.navigate('notifications')}>
            <Feather name="bell" size={24} color="black" style={styles.topBarIcon} />
          </TouchableOpacity>

          {/* User Icon */}
          <TouchableOpacity onPress={() => navigation.navigate('account')}>
            <Feather name="user" size={24} color="black" style={styles.topBarIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Tabs */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray', 
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: '#ddd',
            height: Platform.OS === 'ios' ? 80 : 60, 
            paddingBottom: Platform.OS === 'ios' ? 15 : 5,
          },
        }}
      >
        {/* Home */}
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
          }}
        />

        {/* Orders */}
        <Tabs.Screen
          name="orders"
          options={{
            title: 'Orders',
            tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />,
          }}
        />

        {/* Promos */}
        <Tabs.Screen
          name="promos"
          options={{
            title: 'Promos',
            tabBarIcon: ({ color }) => <Ionicons name="pricetag" size={24} color={color} />,
          }}
        />

        {/* Account */}
        <Tabs.Screen
          name="account"
          options={{
            title: 'Account',
            tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 50 : 40,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarIcon: {
    marginLeft: 12,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
