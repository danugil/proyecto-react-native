import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";

function ItemListCategories({ navigation }) {
    const [productsFiltered, setProductsFiltered] = useState([]);

    const category = useSelector(
        (state) => state.shopReducer.value.categorySelected
    );

    const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category);

    const search = (searchWord) => {
        let filteredProducts = Object.values(productsFilteredByCategory);
        if (searchWord && searchWord != "") {
            filteredProducts = filteredProducts.filter(p => p.title.toLowerCase().includes(searchWord.toLowerCase()))
        }
        setProductsFiltered(filteredProducts)
    };

    useEffect(() => {
        console.log(productsFilteredByCategory)
        if (productsFilteredByCategory) {
            setProductsFiltered(productsFilteredByCategory)
        }
    }, [productsFilteredByCategory])

    return (
        <View style={styles.container}>
            <Search onSearch={(e) => search(e)} />
            { isLoading ? (
                <ActivityIndicator style={styles.loading} size="large" color={colors.purple}/>
            ) : (   
            <FlatList
                data={Object.values(productsFiltered)}
                renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
                keyExtractor={(item) => item.id.toString()}
            />
            )}
        </View>
    );
};

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: colors.bg,
    },
    loading:  {
        flexDirection: 'column',
        alignSelf: 'center',
    },
});