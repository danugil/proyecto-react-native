import { FlatList, View } from "react-native";
import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

function Categories({navigation}) {
    return (
        <View>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <CategoryItem navigation={navigation} category={item} />
                )}
                keyExtractor={(category) => category}
            />
        </View>
    );
};

export default Categories;