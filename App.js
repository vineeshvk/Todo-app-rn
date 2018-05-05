import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Tab from './Components/tab'
import EditText from './Components/editText'
import BottomButton from './Components/bottomButton'
import TodoList from './Components/todoList'

import { openDatabase } from "react-native-sqlite-storage";
let db = openDatabase({ name: 'test.db', createFromLocation: "~ListItem.db", location: 'Library' })


export default class App extends React.Component {
  //the state
  constructor(props) {
    super(props)
    this.state = {
      listItem: "",
      list: [],
    };
    db.transaction((tx) => {
      tx.executeSql('SELECT * from List', [], (tx, results) => {
        var len = results.rows.length;
        for (let i = 0; i < len; i++) {
          let row = results.rows.item(i);
          //console.log(`Record: ${row.value}`)
          this.setState(prevState => ({
            list: prevState.list.concat({ key: row.key, value: row.value })
          }));
        }
      }
      )
    })
  }


  itemDeleteHandler = (key) => {
    this.setState(prevState => ({ list: prevState.list.filter((item) => item.key !== key) }))
    this.deleteFromDB(key)
  };

  textChangeHandler = (value) => {
    this.setState({
      listItem: value
    });
  };

  insertItem = () => {
    if (this.state.listItem.trim() === "") {
      return;
    }
    let key = Math.random()
    let value = this.state.listItem
    this.setState(prevState => ({
      list: prevState.list.concat({ key: key, value: prevState.listItem })
    }));
    this.textInput.clear();
    this.insertIntoDB(key, value)
    this.setState({ listItem: "" })
  };

  insertIntoDB = (key, value) => {
    console.log(key)
    db.transaction((tx) => {
      tx.executeSql('INSERT into List(key,value) VALUES(?,?)', [key, value])
    }
    )
  }

  deleteFromDB = (key) =>{
    db.transaction((tx) => {
      tx.executeSql('DELETE from List WHERE key = ?',[key])
    })
    console.log(key)
}


render() {
  return (
    <View style={styles.container}>
      <Tab />
      <EditText
        reference={input => { this.textInput = input }}
        customOnChangeHandler={this.textChangeHandler} />
      <TodoList onItemDeleted={this.itemDeleteHandler} list={this.state.list} />
      <BottomButton insertItem={this.insertItem} />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});