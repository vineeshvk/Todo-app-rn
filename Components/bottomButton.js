import React from 'react';
import { TextInput, StyleSheet, Text, View, ScrollView, TouchableNativeFeedback, Button } from 'react-native';

const BottomButton = (props) => (
  <TouchableNativeFeedback onPress={props.insertItem} >
    <View style={styles.fab}>
      <Text
        style={styles.buttonText}
      >ADD</Text>
    </View>
  </TouchableNativeFeedback>
)


const styles = StyleSheet.create({
  fab: {
    padding: 10,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285f4'
  },
  buttonText: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
  },
})

export default BottomButton;