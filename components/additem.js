import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontSize: 32,
  }
})

export default function AddItem({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='needed foods. . .'
        onChangeText={changeHandler}
      />
      <Button onPress={() => submitHandler(text)} title='add item' color='black'/>
    </View>
  )
}