import { Pressable, Text, StyleSheet } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category, setCategorySelected }) => {
    return (
        <Card>
            <Pressable onPress={() => setCategorySelected(category)}>
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