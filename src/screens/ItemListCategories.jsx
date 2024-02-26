import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { colors } from "../global/colors";
import { useSelector } from "react-redux";

function ItemListCategories({ navigation }) {
    const [productsFiltered, setProductsFiltered] = useState([]);
    const productsFilteredByCategory = useSelector(
        (state) => state.shopReducer.value.productsFilteredByCategory
    );

    const search = (searchWord) => {
        let filteredProducts = productsFilteredByCategory
        if (searchWord && searchWord != "") {
            filteredProducts = filteredProducts.filter(p => p.title.toLowerCase().includes(searchWord.toLowerCase()))
        }
        setProductsFiltered(filteredProducts)
    };

    useEffect(() => {
        if (productsFilteredByCategory) {
            setProductsFiltered(productsFilteredByCategory)
        }
    }, [])

    return (
        <View style={styles.container}>
            <Search onSearch={(e) => search(e)} />
            <FlatList
                data={productsFiltered}
                renderItem={({ item }) => <ProductItem product={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        backgroundColor: colors.bg,
    },
});