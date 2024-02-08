import { StyleSheet, Text, Image } from "react-native";
import Card from "./Card";

const ProductItem = ({ product }) => {
    return (
        <>
            <Card>
                <Text style={styles.text1}>{product.title}</Text>
                <Image style={styles.images} source={{ uri: product.images[0]}}/>
            </Card>
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
    images: {
        width: 340,
        height: 200,
        borderRadius: 10,
    },
});