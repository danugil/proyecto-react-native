import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { colors } from "../global/colors";

const InputForm = ({ label, error, onChange, isSecure, placeholder }) => {
    const [input, setInput] = useState("");

    const onChangeText = (text) => {
        setInput(text);
        onChange(text)
    };

    return (
        <View>
            <Text style={styles.textLabel}>{label}</Text>
            <TextInput
                style={styles.input1}
                value={input}
                onChangeText={onChangeText}
                secureTextEntry={isSecure}
                placeholder={placeholder}
            />
            {error ? <Text style={styles.textError}>{error}</Text> : null}
        </View>
    );
};

export default InputForm

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    textLabel: {
        fontFamily: 'NunitoMedium',
        fontSize: 18,
        marginTop: 25,
        marginBottom: 8,
    },
    input1: {
        borderRadius: 15,
        borderColor: colors.teal,
        padding: 12,
        borderWidth: 1,
        width: "100%",
        fontSize: 16,
        backgroundColor: colors.white,
        fontFamily: 'NunitoRegular',
    },
    textError: {
        fontFamily: 'NunitoItalic2',
        fontSize: 14,
        color: colors.red,
        paddingTop: 5,
        alignSelf: 'center',
    },
});