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
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    input1: {
        borderRadius: 15,
        borderColor: colors.teal,
        padding: 12,
        borderWidth: 1,
        width: "85%",
        fontSize: 16,
        backgroundColor: colors.white,
        fontFamily: 'NunitoRegular',
    },
    icons: {
        width: 26,
        height: 26,
    },
    iconsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.teal,
        borderRadius: 12,
        height: 50,
        width: '13%',
    },
});