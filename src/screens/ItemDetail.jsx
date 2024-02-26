import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import allProducts from "../data/allProducts2.json";
import { colors } from "../global/colors";

const ItemDetail = ({ navigation, route }) => {
    const [product, setProduct] = useState(null);

    const { id } = route.params

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
                        <Pressable style={styles.buyButton}>
                            <Text style={styles.text3}>COMPRAR</Text>
                        </Pressable>
                    </View>
                </View>
            ) : (
                <Text>Cargando...</Text>
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
        backgroundColor: colors.purple,
        padding: 20,
        borderRadius: 15,
        width: '100%',
        alignItems: 'center',
    },
    text3: {
        fontFamily: 'NunitoBold',
        fontSize: 18,
        color: colors.white,
    },
});