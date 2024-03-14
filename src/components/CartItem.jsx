import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../global/colors";
import Counter from "./Counter";

const CartItem = ({ item }) => {

  return (
    <View style={styles.container}>
      <Image style={styles.images} source={{ uri: item.images[0] }}/>
      <Text style={styles.text1}>{item.title}</Text>
      <Text>{item.brand}</Text>
      <Text style={styles.text2}>${item.price}</Text>
      <Text style={styles.text3}>x {item.quantity}</Text>
      {/* <Counter /> */}
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginBottom: 15,
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  text1: {
    fontFamily: 'NunitoBold',
    fontSize: 20, 
  },
  text2: {
    fontFamily: 'NunitoBold',
    fontSize: 16, 
  },
  images: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'center',
  },
  text3: {
    fontFamily: 'NunitoBold',
    fontSize: 18,
    alignSelf: 'center', 
    marginTop: 10,
  },
});