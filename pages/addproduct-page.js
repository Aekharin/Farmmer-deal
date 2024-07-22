import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";


const AddProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>
      <TextInput style={styles.input} placeholder="Product Name" />
      <TextInput style={styles.input} placeholder="Product Price" />
      <TextInput style={styles.input} placeholder="Product Quantity" />
      <Button title="Add Product" onPress={() => alert('Added')} />
      <Button title="Home Market" onPress={() => navigation.navigate('HomeMarket')} />
    </View>
  );
};
export default AddProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
});