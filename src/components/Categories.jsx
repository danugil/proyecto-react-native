import { FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

function Categories({ navigation }) {
    const categories = useSelector(state => state.shopReducer.value.categories);

    return (
        <View>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <CategoryItem navigation={navigation} category={item.title} icon={item.icon} />
                )}
                keyExtractor={(item) => item.title}
            />
        </View>
    );
};

export default Categories;