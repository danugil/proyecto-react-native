import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { colors } from "../global/colors";

const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.value.items);
    const total = useSelector((state) => state.cartReducer.value.total);
    const [triggerPost, result] = usePostOrderMutation();

    const confirmCart = () => {
        triggerPost({ total, cartItems, user: "loggedUser" })
    }

    return (
        <View style={styles.container}>
            {cartItems.length > 0 ? (
                <>
                    <FlatList
                        data={cartItems}
                        renderItem={({ item }) => <CartItem item={item} />}
                        keyExtraxtor={(cartItem) => cartItem.id}
                    />
                    <Text style={styles.textTotal}>Total: ${total}</Text>
                    <Pressable onPress={confirmCart} style={styles.button}>
                        <Text style={styles.textButton}>Continuar</Text>
                    </Pressable>
                </>
            ) : (
                <Text style={styles.textEmptyCart}>No hay productos agregados</Text>
            )}
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
        alignSelf: 'flex-end',
    },
    textEmptyCart: {
        fontFamily: 'NunitoBold',
        fontSize: 24,
        paddingHorizontal: 20,
    },
    button: {
        marginBottom: 50,
        backgroundColor: colors.teal,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginHorizontal: 20,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    textButton: {
        color: colors.white,
        fontFamily: 'NunitoBold',
        fontSize: 18,
    },
});