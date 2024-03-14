import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { colors } from "../global/colors";

const MyProfile = ({ navigation }) => {
    const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value);

    return (
        <View style={styles.container}>
            {profileImage || imageCamera ? (
                <Image
                    source={{ uri: profileImage || imageCamera }}
                    style={styles.image}
                />
            ) : (

                <Image
                    source={require("../../assets/defaultProfile.jpg")}
                    style={styles.image}
                />
            )}
            <Pressable onPress={() => navigation.navigate("ImageSelector")} style={styles.button}>
                <Text style={styles.text}>Agregar foto de perfil</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate("LocationSelector")}>
                <Text style={styles.text}>Mis direcciones</Text>
            </Pressable>
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    image: {
        alignSelf: 'center',
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 200,
    },
    button: {
        backgroundColor: colors.teal,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginHorizontal: 40,
        marginTop: 30,
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
        fontSize: 18,
    },
});