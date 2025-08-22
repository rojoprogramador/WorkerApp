import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';

//? Iconos
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#407ee3',
          position: Platform.select({
            ios: 'absolute',
            default: 'relative',
          }),
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarActiveTintColor: "#f2c70f",
          tabBarInactiveTintColor: "#00000074",
          tabBarIcon: ({ color }) => <Foundation size={28} name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: 'Agendados',
          tabBarActiveTintColor: "#f2c70f",
          tabBarInactiveTintColor: "#00000074",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="calendar-number" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Ajustes',
          tabBarActiveTintColor: "#f2c70f",
          tabBarInactiveTintColor: "#00000074",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="settings" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarActiveTintColor: "#f2c70f",
          tabBarInactiveTintColor: "#00000074",
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
