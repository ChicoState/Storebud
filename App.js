import React, { useState } from 'react';
import { StyleSheet, FlatList, Text, TextInput, View, ScrollView } from 'react-native';
import Header from './components/header';
import AddItem from './components/additem';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#fff',
  },
  item: {
    padding: 2,
    fontSize: 32,
    height: 60,
    marginHorizontal: 10,
  },
  content: {
    fontSize: 32,
  },
  list: {
    
  }
});

export default function App() {
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
