import { Pressable, Text, StyleSheet, Image } from "react-native";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CategoryItem = ({ category, navigation, icon }) => {
    const dispatch = useDispatch()

    return (
        <Card>
            <Pressable
                onPress={() => {
                    dispatch(setCategorySelected(category))
                    navigation.navigate("ItemListCategories", { category })
                }}
                style={styles.container}
            >
                <Image
                    source={{ uri: icon }}
                    style={styles.image} />
                <Text style={styles.text1}>{category}</Text>
            </Pressable>
        </Card>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
    },
    text1: {
        fontFamily: 'NunitoRegular',
        fontSize: 20,
    },
    image: {
        width: 24,
        height: 24,
    },
});