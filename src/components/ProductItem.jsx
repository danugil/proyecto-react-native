import { useEffect, useState } from "react";
import { StyleSheet, Text, Image, useWindowDimensions, Pressable } from "react-native";
import Card from "./Card";

const ProductItem = ({ product, navigation }) => {
    const [isPortrait, setIsPortrait] = useState(true);
    const [isLandscape, setIsLandscape] = useState(false);

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if (height > width) {
            setIsPortrait(true);
            setIsLandscape(false);
        } else {
            setIsPortrait(false);
            setIsLandscape(true);
        }
    }, [width, height])

    return (
        <>
            <Pressable onPress={() => navigation.navigate("ItemDetail", { id: product.id })}>
                <Card>
                    <Text style={width < 350 ? styles.text2 : styles.text1}>{product.title}</Text>
                    <Image style={styles.images} resizeMode="cover" source={{ uri: product.images[0] }} />
                </Card>
            </Pressable>
        </>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    text1: {
        fontFamily: 'NunitoRegular',
        fontSize: 18,
        marginBottom: 5,
    },
    text2: {
        fontFamily: 'NunitoRegular',
        fontSize: 22,
        marginBottom: 5,
    },
    images: {
        width: '100%',
        height: 250,
        borderRadius: 10,
    },
});