import { FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";
import { useGetCategoriesQuery } from "../services/shopService";

function Categories({ navigation }) {

    const { data, isLoading, error } = useGetCategoriesQuery();

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <CategoryItem navigation={navigation} category={item.title} icon={item.icon} />
                )}
                keyExtractor={(item) => item.title}
            />
        </View>
    );
};

export default Categories;