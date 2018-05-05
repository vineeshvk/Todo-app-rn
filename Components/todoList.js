import React from 'react';
import { FlatList } from 'react-native';
import ListItem from './listItem'

const TodoList = (props) => {
  return (
    <FlatList
      data={props.list}
      renderItem={(info) =>
        <ListItem
          customOnPress={() => props.onItemDeleted(info.item.key)}
          thingsTodo={info.item.value}
        />
      }
      style={{ width: '100%' }}></FlatList>
  )
}

export default TodoList;