import React from 'react'
import { Modal, View, Text, StyleSheet} from 'react-native'


const DetailsModal = (props) => (
  <Modal>
    <View style = {[props.styles,styles.timeBG]}>
      <Text style = {[styles.timeText,props.textStyles]}>Time</Text>
    </View>
    <View>
      <Text>{props.selectedItem.value}</Text>
    </View>
  </Modal>

)


const styles = StyleSheet.create(
  {
    timeText:{
      fontSize : 50,
      margin:20
    },
    timeBG:{
      padding:10
    }
  }
)
export default DetailsModal
