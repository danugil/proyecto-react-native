import { Pressable, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../services/authService";
import { loginSchema } from "../validations/loginSchema";
import { setUser } from "../features/auth/authSlice";
import { colors } from "../global/colors";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [triggerSignin, result] = useLoginMutation();

    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log("mail", errorMail);
        console.log("password", errorPassword);

        try {
            setErrorMail("");
            setErrorPassword("");

            loginSchema.validateSync({ password, email })
            triggerSignin({ email, password });
            console.log("Se ingreso correctamente");
        } catch (error) {
            console.log("path", error.path);
            switch (error.path) {
                case "email":
                    setErrorMail(error.message);
                    break;
                case "password":
                    setErrorPassword(error.message);
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
            <Text style={styles.text1}>Ingresa en una cuenta de skinCare Store</Text>
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
            {
                result.isLoading ? (
                    <ActivityIndicator size="large" color={colors.purple} style={{marginTop: 50}}/>
                ) : (
                    <SubmitButton title={"Ingresar"} onPress={onSubmit} />
                )
            }
            <View style={styles.container2}>
                <Text style={styles.text2}>¿No tienes una cuenta?</Text>
                <Pressable style={styles.button}>
                    <Text onPress={() => navigation.navigate("SignUp")} style={styles.text3}>Crea una aquí</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
    },
    text1: {
        fontFamily: 'NunitoSemiBold',
        fontSize: 18,
        alignSelf: 'center',
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
})