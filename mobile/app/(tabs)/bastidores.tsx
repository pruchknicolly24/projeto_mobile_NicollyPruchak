import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BastidoresScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo aos Bastidores!</Text>
    </View>
  );
};

export default BastidoresScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
