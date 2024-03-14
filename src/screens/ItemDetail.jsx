import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from "react-native";
import allProducts from "../data/allProducts2.json";
import { colors } from "../global/colors";
import { useDispatch } from "react-redux";
import { addItem } from "../features/shop/cartSlice";

const ItemDetail = ({ navigation, route }) => {
    const [product, setProduct] = useState(null);

    const { id } = route.params;

    const dispatch = useDispatch();

    const onAddCart = () => {
        dispatch(addItem({...product, quantity: 1}))
    }

    useEffect(() => {
        const productFinded = allProducts.find((product) => product.id === id)
        setProduct(productFinded)
    }, [id]);

    return (
        <View style={styles.container}>
            {product ? (
                <View>
                    <View>
                        <Image
                            source={{ uri: product.images[0] }}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.containerText}>
                        <Text style={styles.text1}>{product.title}</Text>
                        <Text style={styles.text2}>{product.description}</Text>
                        <Text style={styles.text1}>${product.price}</Text>
                        <Pressable style={styles.buyButton} onPress={onAddCart}>
                            <Text style={styles.text3}>Agregar al carrito</Text>
                        </Pressable>
                    </View>
                </View>
            ) : (
                <ActivityIndicator style={styles.loading} size="large" color={colors.purple}/>
            )}
        </View>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: '100%',
    },
    image: {
        height: 400,
        width: '100%',
        resizeMode: 'center', 
    },
    text1: {
        fontFamily: 'NunitoBold',
        fontSize: 24,
        paddingVertical: 10,
    },
    text2: {
        fontFamily: 'NunitoRegular',
        fontSize: 20,
    },
    containerText: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    buyButton: {
        backgroundColor: colors.teal,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
        width: '100%',
    },
    text3: {
        fontFamily: 'NunitoBold',
        fontSize: 18,
        color: colors.white,
    },
    loading:  {
        flexDirection: 'column',
        alignSelf: 'center',
    },
});