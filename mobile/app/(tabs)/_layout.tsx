import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Platform, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const backgroundColor = isDarkMode ? '#000' : '#fff';
  const iconColor = isDarkMode ? '#fff' : '#000';
  const borderColor = isDarkMode ? '#fff' : '#000';

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <TouchableOpacity
        onPress={() => setIsDarkMode(!isDarkMode)}
        style={{
          position: 'absolute',
          top: 8,
          right: 12,
          width: 34,
          height: 34,
          borderRadius: 17,
          backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: borderColor,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 3,
          zIndex: 10,
        }}
      >
        <Ionicons
          name={isDarkMode ? 'sunny' : 'moon'}
          size={18}
          color={iconColor}
        />
      </TouchableOpacity>

      <Tabs
        key={isDarkMode ? 'dark' : 'light'}
        screenOptions={{
          tabBarActiveTintColor: Colors[isDarkMode ? 'dark' : 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: {
            backgroundColor,
            position: 'absolute',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="bastidores"
          options={{
            title: 'Bastidores',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="camera.fill" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}
