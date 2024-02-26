import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const OrderItem = ({ item }) => {
    const total = item.items.reduce(
        (acc, currentItem) => (acc += currentItem.quantity * currentItem.price), 0
    );

    return (
        <View style={styles.container}>
            <Text>{new Date(item.createdAt).toLocaleString()}</Text>
            <Text>${total}</Text>
        </View>
    );
};

export default OrderItem;

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
});