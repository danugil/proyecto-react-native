import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View, Image } from "react-native";
import cancel1 from "../../assets/cancelar.png";
import { colors } from "../global/colors";

const Search = ({ onSearch }) => {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e);
        onSearch(e);
    };

    const removeInput = () => {
        setInput("");
        onSearch("");
    };

    return (
        <View>
            <View style={styles.continer}>
                <TextInput
                    onChangeText={(e) => onChange(e)}
                    value={input}
                    style={styles.input1}
                    placeholder="Buscar producto"
                />
                <Pressable style={styles.iconsContainer} onPress={removeInput}>
                    <Image style={styles.icons} source={cancel1} />
                </Pressable>
            </View>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    continer: {
        flexDirection: 'row',
        gap: 4,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    input1: {
        borderRadius: 8,
        borderColor: colors.purple,
        padding: 10,
        borderWidth: 1,
        width: "85%",
        fontSize: 20,
        backgroundColor: colors.white,
        fontFamily: 'NunitoRegular',
    },
    icons: {
        marginTop: 8,
        width: 26,
        height: 26,
    },
    iconsContainer: {
        alignItems: 'center',
        backgroundColor: colors.purple,
        borderRadius: 8,
        height: 44,
        width: 44,
    },
});