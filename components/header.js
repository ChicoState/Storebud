import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 20,
    backgroundColor: '#98FB98'
  },
  title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Grocery List</Text>
    </View>
  )
}