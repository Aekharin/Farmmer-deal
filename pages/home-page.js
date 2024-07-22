import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MyStyles } from './styles/styles.js';


const HomeScreen = ({ navigation }) => {


  return (
    <ImageBackground source={require('./assets/vegetable-box.jpg')} style={MyStyles.background}>
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)']}
        style={MyStyles.overlay}
        locations={[0, 0.2, 0.5, 0.5, 0.8, 1]}
      >
        <View style={MyStyles.container}>
          <Text style={MyStyles.title}>Farmer Deal</Text>
          <Text style={MyStyles.subtitle}>
            เปิดประสบการณ์การซื้อขายที่มีประสิทธิภาพที่สุดสำหรับคุณ
          </Text>
          <TouchableOpacity style={MyStyles.button} onPress={() => navigation.navigate('login')}>
            <Text style={MyStyles.buttonText}>เริ่มต้น</Text>
          </TouchableOpacity>

        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default HomeScreen;
