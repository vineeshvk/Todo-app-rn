import React from 'react';
import { TextInput, StyleSheet, Text, View, ScrollView, TouchableNativeFeedback, Button } from 'react-native';

const Tab = () => (
  <View style={styles.tab}>
    <Text style={styles.tabText}>TODO</Text>
  </View>
);

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
   // justifyContent: 'center',
    width: '100%',
    height: 85-25,
    elevation: 5,
    backgroundColor: '#fff'
  },
  tabText: {
    fontSize: 30,
    paddingTop: 10,
    color: '#000',
  },

})

export default Tab;