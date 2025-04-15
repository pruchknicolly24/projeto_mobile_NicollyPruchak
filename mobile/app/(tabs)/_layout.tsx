import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Platform, View, Text, TouchableOpacity } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Define cores com base no modo atual
  const backgroundColor = isDarkMode ? '#000' : '#fff';
  const textColor = isDarkMode ? '#fff' : '#000';
  const borderColor = isDarkMode ? '#fff' : '#333';

  return (
    <View style={{ flex: 1, backgroundColor }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[isDarkMode ? 'dark' : 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              backgroundColor,
            },
            default: {
              backgroundColor,
            },
          }),
        }}>
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

      <TouchableOpacity
        onPress={() => setIsDarkMode(!isDarkMode)}
        style={{
          position: 'absolute',
          top: 10,
          right: 15,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor,
          paddingVertical: 4,
          paddingHorizontal: 10,
          borderRadius: 30,
          borderWidth: 1,
          borderColor,
        }}
      >
        <Text style={{
          color: textColor,
          fontSize: 12,
          fontWeight: '600',
          marginRight: 5,
        }}>
          🌗
        </Text>
        <Text style={{
          color: textColor,
          fontSize: 12,
          fontWeight: '600',
        }}>
          Mudar Tema
        </Text>
      </TouchableOpacity>
    </View>
  );
}
