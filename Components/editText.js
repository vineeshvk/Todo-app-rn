import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const EditText = (props) => (
	<TextInput
		ref={props.reference}
		style={styles.input}
		onChangeText={props.customOnChangeHandler}
		placeholder='What do you wanna do today ?'
		underlineColorAndroid='transparent'
	/>
)

const styles = StyleSheet.create({
	input: {
		color: '#818181',
		width: '100%',
		padding: 15,
		fontSize: 23,
		backgroundColor: '#fff'
	},
})

export default EditText;