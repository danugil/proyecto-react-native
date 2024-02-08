import { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Header from "../components/Header";
import allProducts from "../data/allProducts.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";

function ItemListCategories({ category }) {
    const [products, setProducts] = useState([]);
    const [productsFiltered, setProductsFiltered] = useState([]);

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
        <View>
            <Header title={category} />
            <Search onSearch={(e) => search(e)} />
            <FlatList
                data={productsFiltered}
                renderItem={({ item }) => <ProductItem product={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default ItemListCategories;