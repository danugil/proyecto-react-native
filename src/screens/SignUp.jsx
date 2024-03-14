import { Pressable, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { useDispatch } from "react-redux";
import { signUpSchema } from "../validations/signUpSchema";
import { useSignUpMutation } from "../services/authService";
import { setUser } from "../features/auth/authSlice";
import SubmitButton from "../components/SubmitButton";
import { colors } from "../global/colors";

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
    const [triggerSignup, result] = useSignUpMutation();

    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log("mail", errorMail);
        console.log("password", errorPassword);
        console.log("confirmPassword", errorConfirmPassword);

        try {
            setErrorMail("");
            setErrorPassword("");
            setErrorConfirmPassword("");

            signUpSchema.validateSync({ password, confirmPassword, email });
            triggerSignup({ email, password });
            console.log("Registro exitoso");
        } catch (error) {
            console.log("path", error.path);
            switch (error.path) {
                case "email":
                    setErrorMail(error.message);
                    break;
                case "password":
                    setErrorPassword(error.message);
                    break;
                case "confirmPassword":
                    setErrorConfirmPassword(error.message);
                    break;
                default:
                    break;
            }
        }
    };

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data));
        }
    }, [result]);

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Crea una cuenta en skinCare Store</Text>
            <InputForm
                label={'Correo electrónico'}
                error={errorMail}
                onChange={setEmail}
                placeholder={'Ingrese un correo electrónico'}
            />
            <InputForm
                label={'Contraseña'}
                error={errorPassword}
                onChange={setPassword}
                isSecure={true}
                placeholder={'Ingrese una contraseña'}
            />
            <InputForm
                label={'Repetir contraseña'}
                error={errorConfirmPassword}
                onChange={setConfirmPassword}
                isSecure={true}
                placeholder={'Repita la contraseña'}
            />
            {
                result.isLoading ? (
                    <ActivityIndicator size="large" color={colors.purple} style={{ marginTop: 50 }} />
                ) : (
                    <SubmitButton title={"Registrate"} onPress={onSubmit} />
                )
            }
            <View style={styles.container2}>
                <Text style={styles.text2}>¿Ya tienes una cuenta?</Text>
                <Pressable style={styles.button}>
                    <Text onPress={() => navigation.navigate("Login")} style={styles.text3}>Ingresa aquí</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    text1: {
        fontFamily: 'NunitoSemiBold',
        alignSelf: 'center',
        fontSize: 18,
        paddingHorizontal: 35,
    },
    container2: {
        paddingTop: 50,
        flexDirection: 'column',
        alignSelf: 'center',
    },
    text2: {
        width: '100%',
        fontFamily: 'NunitoRegular',
        fontSize: 18,
    },
    text3: {
        fontFamily: 'NunitoBold',
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    button: {
        alignSelf: 'center',
    }
});