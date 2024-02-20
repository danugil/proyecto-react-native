import { Pressable, Text, StyleSheet } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category, navigation }) => {
    return (
        <Card>
            <Pressable onPress={() => navigation.navigate("ItemListCategories", {category})}>
                <Text style={styles.text1}>{category}</Text>
            </Pressable>
        </Card>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
    text1: {
        fontFamily: 'NunitoRegular',
        fontSize: 20,
    },
});