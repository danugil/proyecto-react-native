import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalPrice = allCartItems.reduce((acc, currentItem) => acc += (currentItem.quantity * currentItem.price), 0)
        setTotal(totalPrice);
        setCartItems(allCartItems);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartItem item={item} />}
                keyExtraxtor={(cartItem) => cartItem.id}
            />
            <Text style={styles.textTotal}>Total: ${total}</Text>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: '100%'
    },
    textTotal: {
        marginHorizontal: 20,
        fontFamily: 'NunitoBold',
        fontSize: 20,
        paddingBottom: 30,
    },
});