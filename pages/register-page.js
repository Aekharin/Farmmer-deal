import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput style={styles.input} placeholder="Username" />
            <TextInput style={styles.input} placeholder="Email" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <Button title="Register" onPress={() => alert('Registered')} />
            <Button title="Login" onPress={() => navigation.navigate('login')} />
        </View>
    );
};
export default RegisterScreen;

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