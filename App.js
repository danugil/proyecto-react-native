import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';
import { colors } from "./src/global/colors";
import { fonts } from "./src/global/fonts";

export default function App() {
  const [fonstLoaded] = useFonts(fonts);

  if (!fonstLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: colors.bg,
  },
});