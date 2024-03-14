import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { setCameraImage } from "../features/auth/authSlice";
import { usePostProfileImageMutation } from "../services/shopService";
import { colors } from "../global/colors";

const ImageSelector = ({ navigation }) => {
    const [image, setImage] = useState(null);
    const [error, setError]= useState(null);
    const { localId } = useSelector((state) => state.authReducer.value);
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
    const dispatch = useDispatch();

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            setError("El permiso para acceder a la camara fue denegado.");
            return false;
        }
        return true;
    };

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions();
        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [3, 4],
                base64: true,
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        }
    };

    const confirmImage = () => {
        dispatch(setCameraImage(image));
        triggerSaveProfileImage({ localId, image });
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {image ? (
                <>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Pressable onPress={pickImage} style={styles.button}>
                        <Text style={styles.textButton}>Sacar otra foto</Text>
                    </Pressable>
                    <Pressable onPress={confirmImage} style={styles.button}>
                        <Text style={styles.textButton}>Confirmar foto</Text>
                    </Pressable>
                </>
            ) : (
                <>
                <View style={styles.noPhotoContainer}>
                    <Text style={styles.text2}>No hay foto para mostrar</Text>
                </View>
                    <Pressable onPress={pickImage} style={styles.button}>
                        <Text style={styles.textButton}>Sacar foto</Text>
                    </Pressable>
                </>
            )}
            {error && (
                <View>
                    <Text style={styles.textError}>{error}</Text>
                </View>
            )}
        </View>
    );
};

export default ImageSelector;

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
        paddingBottom: 20,
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
    textButton: {
        color: colors.white,
        fontFamily: 'NunitoBold',
        fontSize: 18,
    },
    text2: {
        alignSelf: 'center',
        fontFamily: 'NunitoBoldItalic'
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
    },
    textError: {
        fontFamily: 'NunitoItalic2',
        fontSize: 14,
        color: colors.red,
        alignSelf: 'center',
        marginTop: 15,
    },
});