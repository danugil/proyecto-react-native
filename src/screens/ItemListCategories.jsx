import { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import allProducts from "../data/allProducts.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { colors } from "../global/colors";

function ItemListCategories({ navigation, route }) {
    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);

    const { category } = route.params;

    useEffect(() => {
        if (category) {
            const productsByCategories = allProducts.filter((product) => product.category === category);
            setProducts(productsByCategories);
            setProductsFiltered(productsByCategories)
        }
    }, [category]);

    const search = (searchWord) => {
        let filteredProducts = products
        if (searchWord && searchWord != "") {
            filteredProducts = filteredProducts.filter(p => p.title.includes(searchWord))
        }
        setProductsFiltered(filteredProducts)
    };

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