//! tabs layout (bottom bar links)

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';

//? Screens
import Calendar from './calendar';
import Index from './index';
import Profile from './profile';
import Settings from './settings';

//? Iconos
import UserTopBar from '@/components/ui/topBar_Component';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Foundation from '@expo/vector-icons/Foundation';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function TabLayout() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: props => <UserTopBar user='Jhoan Arango'/>,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: '#407ee3',
          position: Platform.select({
            ios: 'absolute',
            default: 'relative',
          }),
        },
      }}>
      <Tab.Screen
        name="index"
        component={Index}
        options={{
          title: "Home",
          tabBarActiveTintColor: "#f2c70f",
          tabBarInactiveTintColor: "#00000074",
          tabBarIcon: ({ color }) => <Foundation size={28} name="home" color={color} />
        }}
      />
      <Tab.Screen
        name="calendar"
        component={Calendar}
        options={{
          title: 'Agendados',
          tabBarActiveTintColor: "#f2c70f",
          tabBarInactiveTintColor: "#00000074",
          tabBarIcon: ({ color }) => <Ionicons size={28} name="calendar-number" color={color} />,
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          title: 'Ajustes',
          tabBarActiveTintColor: "#f2c70f",
          tabBarInactiveTintColor: "#00000074",
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="settings" color={color} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarActiveTintColor: "#f2c70f",
          tabBarInactiveTintColor: "#00000074",
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
