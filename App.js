import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import uuid from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';

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

  const deleteItem = (id) => {
    setItems(prevItems => {
      console.log(id);
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem
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
