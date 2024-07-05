import React from "react";
import { View, Text,FlatList,StyleSheet,TouchableOpacity,Image,Button} from "react-native";
import { SearchBar } from "react-native-screens";

const products = [
    { id: '1', name: 'มันสำปะหลัง', price: '3.75 บาท/กิโลกรัม', quantity: '1200 กิโลกรัม', image: require('../pages/assets/icon.png') },
    { id: '2', name: 'ข้าวโพด', price: '10.80 บาท/กิโลกรัม', quantity: '5000 กิโลกรัม', image: require('../pages/assets/icon.png') },
    { id: '3', name: 'ข้าวนาปรัง', price: '24.60 บาท/กิโลกรัม', quantity: '3200 กิโลกรัม', image: require('../pages/assets/icon.png') },
    { id: '4', name: 'อ้อย', price: '1193.8 บาท/ตัน', quantity: '1200 กิโลกรัม', image: require('../pages/assets/icon.png') }
  ];

const HomeMarketScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <SearchBar
            placeholder="ค้นหา"
            lightTheme
            round
            containerStyle={styles.searchBar}
            inputContainerStyle={styles.inputContainer}
          />
    
          <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDetails}>โดย นาย กอโก้ ขอไข่</Text>
                <Text style={styles.productDetails}>ที่อยู่ ...............</Text>
                <Text style={styles.productDetails}>วางจำหน่าย {item.quantity}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            )}
            numColumns={2}
          />
          {/* Tab Button ด้านล้างนะ */}
            <View style={styles.container1}>
                <View  style={styles.Button}>
                <Button title="Home Market" onPress={() => navigation.navigate('HomeMarket')} />
                <Button title="Login" onPress={() => navigation.navigate('Login')} />
                <Button title="Register" onPress={() => navigation.navigate('Register')} />
                </View>
            </View>
        </View>

        
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    searchBar: {
      marginBottom: 20,
      backgroundColor: 'transparent',
    },
    inputContainer: {
      backgroundColor: '#fff',
      borderRadius: 20,
    },
    productCard: {
      backgroundColor: '#d4edda',
      borderRadius: 10,
      padding: 10,
      margin: 10,
      alignItems: 'center',
      flex: 1,
    },
    productImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    productDetails: {
      fontSize: 14,
      color: '#6c757d',
    },
    productPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#28a745',
      marginTop: 5,
    },
    addButton: {
      backgroundColor: '#fff',
      borderColor: '#28a745',
      borderWidth: 1,
      borderRadius: 20,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    addButtonText: {
      fontSize: 24,
      color: '#28a745',
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
      Button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
      },
  });

  
    
  
  
  
export default HomeMarketScreen;  