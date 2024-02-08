import { useState } from "react";
import { useFonts } from "expo-font";
import { View, StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import ItemListCategories from "./src/screens/ItemListCategories";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';
import { colors } from "./src/global/colors";
import { fonts } from "./src/global/fonts";

export default function App() {
  const [fonstLoaded] = useFonts(fonts);

  const [categorySelected, setCategorySelected] = useState("");

  if (!fonstLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {categorySelected ? (
        <ItemListCategories category={categorySelected} />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.beige,
  },
});