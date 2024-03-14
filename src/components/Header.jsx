import { View, Text, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        padding: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    text1: {
        fontFamily: 'NunitoBlack',
        fontSize: 28,
        color: colors.white,
    },
});
