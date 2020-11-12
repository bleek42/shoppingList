import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('');

  const handleChange = (chars) => setText(chars);

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        placeholder="item name..."
      />
      <TouchableOpacity
        onPress={() => addItem(text)}
        style={styles.btn}
      >
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add A New Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },

  btn: {
    color: 'green',
  },

  btnText: {
    fontSize: 12,
  }
});

export default AddItem;
