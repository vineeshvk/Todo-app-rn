import React from 'react';
import { Text, CheckBox, TouchableNativeFeedback, View, StyleSheet, Image } from 'react-native';

const ListItem = (props) => (
  <TouchableNativeFeedback>
    <View style={[{ flexDirection: 'row' }, styles.listS]}>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {props.thingsTodo}
        </Text>
      </View>
      <TouchableNativeFeedback onPress={props.customOnPress} >
        <View style={styles.imgHolder}>
          <Image
            source={require('./icons/ic_delete_black_24dp_2x.png')}
            style={styles.delIcon} />
        </View>
      </TouchableNativeFeedback>
    </View>
  </TouchableNativeFeedback>
);

const styles = StyleSheet.create(
  {
    textContainer: {
      paddingBottom: 12,
      paddingLeft: 24,
      paddingTop: 12,
      width: '70%',
    },
    listS: {
      width: '97%',
      justifyContent: 'space-between',
      elevation: 1,
      marginLeft: 5,
      marginTop: 1.5,
      marginBottom: 1.5,
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 17
    },
    imgHolder: {
      paddingLeft: 15,
      width: 50,
      justifyContent: 'center',
      alignItems: 'center',
    }
    ,
    delIcon: {
      width: 20,
      height: 20,
      marginRight: 15,
    }
  }
);


export default ListItem;