import React, { useState } from 'react';
import {
  View,
  Alert,
  FlatList,
  StyleSheet
} from 'react-native';
import uuid from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuid(),
      name: 'Milk',
    },
    {
      id: uuid(),
      name: 'Dog Food',
    },
    {
      id: uuid(),
      name: 'Eggs',
    },
    {
      id: uuid(),
      name: 'Bread',
    },
  ]);

  const addItem = (name) => {
    if (!name) {
      Alert.alert('Error', 'Please enter a name', [
        {
          text: 'OK'
        }
      ]);
    }
    setItems(prevItems => {
      return [{
        id: uuid(),
        name
      },
      ...prevItems];
    });
  };

  const deleteItem = (id) => {
    setItems(prevItems => {
      console.log(id);
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            item={item.name}
            deleteItem={deleteItem}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
