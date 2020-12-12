import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, TextInput, View, ScrollView } from 'react-native';
import styles from './DariansStyles'
import AddItem from './components/additem';

export default function DariansHomeScreen() {
    const [food, setFood] = useState([
    ]);
  
    const submitHandler = (text) => {
      setFood((prevFood) => {
        return[
          {name: text},
          ...prevFood
        ]
      })
    }
  
    return (
      <View style={styles.container}>
      <Header />
        <View style={styles.content}>
        <AddItem submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={food}
              renderItem={({ item }) => (
              <Text style={styles.item}>{item.name}</Text>
              )}
            />
          </View>
        </View>
      </View>
    );
  }