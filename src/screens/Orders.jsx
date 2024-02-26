import { StyleSheet, View, FlatList } from "react-native";
import orders from "../data/orders.json";
import OrderItem from "../components/OrderItem";

const Orders = () => {
  return (
    <View style={styles.container}>
      <FlatList
      data={orders}
      renderItem={({item}) => <OrderItem item={item}/>}
      keyExtractor={(order) => order.id}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});