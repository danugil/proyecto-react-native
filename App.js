import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import cartShop from './assets/carrito-de-compras.png';
import RemoveModal from './components/RemoveModal';
import AddItem from './components/AddItem';
import List from './components/List';


export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);

  const handleInputChange = (value) => setInputValue(value);

  const handleModal = (id) =>{
    setModalVisible(true);
    setItemSelected(id);
  };


  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <RemoveModal 
        modalVisible={modalVisible}
        cartItems={cartItems}
        setCartItems={setCartItems}
        setModalVisible={setModalVisible}
        itemSelected={itemSelected}
      />
      <View style={styles.topBar}>
        <Text style={styles.title1}>Lista de compras</Text>
        <Image style={{width: 50, height: 50}} source={cartShop}/>
      </View>
      <AddItem
        handleInputChange={handleInputChange}
        cartItems={cartItems}
        setCartItems={setCartItems}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <List 
        handleModal={handleModal}
        cartItems={cartItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCEE',
    paddingTop: Constants.statusBarHeight,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E3C5EB',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
