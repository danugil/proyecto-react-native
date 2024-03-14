import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const SubmitButton = ({ onPress, title }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.teal,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginHorizontal: 40,
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    text: {
        color: colors.white,
        fontFamily: 'NunitoBold',
        fontSize: 22,
    },
});