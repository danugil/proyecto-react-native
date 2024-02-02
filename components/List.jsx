import { View, FlatList, Text, Pressable, StyleSheet, Image } from "react-native";
import trashBin from '../assets/eliminar.png';

const List = ({
    handleModal,
    cartItems,
}) => {

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <View style={styles.productCard}>
                        <Text style={styles.productList}>{item.name}</Text>
                        <Pressable onPress={() => handleModal(item.id)}>
                            <Image style={{ width: 30, height: 30 }} source={trashBin} />
                        </Pressable>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default List;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    productCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    productList: {
        fontSize: 20,
        fontWeight: 'bold',
    },
}) 