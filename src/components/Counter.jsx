import { Pressable, StyleSheet, Text, View } from "react-native";
import { increment, decrement, incrementByAmount, reset } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../global/colors";

const Counter = () => {
    const count = useSelector((state) => state.counterReducer.value);

    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Pressable style={styles.buttonContainer} onPress={() => dispatch(decrement())}>
                <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.textCounter}>{count}</Text>
            <Pressable style={styles.buttonContainer} onPress={() => dispatch(increment())}>
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
};

export default Counter;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    buttonContainer: {
        backgroundColor: colors.purple,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    },
    buttonText: {
        fontFamily: 'NunitoRegular',
        color: colors.white,
        fontSize: 20,
        paddingVertical: 10,
    },
    textCounter: {
        fontFamily: 'NunitoBold',
        fontSize: 20,
        paddingHorizontal: 10,
    }
});