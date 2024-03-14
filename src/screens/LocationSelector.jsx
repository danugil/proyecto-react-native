import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapPreview from "../components/MapPreview";
import { googleAPI } from "../firebase/googleAPI";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../features/auth/authSlice";
import { usePostUserLocationMutation } from "../services/shopService";
import { colors } from "../global/colors";

const LocationSelector = () => {
    const [location, setLocation] = useState({ latitude: "", longitude: "", });
    const [error, setError] = useState(null);
    const [address, setAddress] = useState(null);
    const { localId } = useSelector(state => state.authReducer.value)
    const [triggerPostAddress, result] = usePostUserLocationMutation();

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestBackgroundPermissionsAsync();
            console.log(status);
            if (status !== "granted") {
                setError("El permiso para acceder a la ubicación fue denegado.");
                return;
            }
            try {
                let location = await Location.getCurrentPositionAsync();
                console.log(location);
                setLocation({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                });
            } catch (error) {
                console.error("Error al obtener la ubicación:", error);
                setError("Error al obtener la ubicación.");
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`;
                    const response = await fetch(url_reverse_geocode);
                    const data = await response.json();
                    setAddress(data.results[0].formatted_address);
                }
            } catch (err) { }
        })();
    }, [location]);

    const onConfirmAddress = () => {
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address,
        };
        dispatch(setUserLocation(locationFormatted));

        triggerPostAddress({ localId, location: locationFormatted })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Mis direcciones</Text>
            {location.latitude ? (
                <View>
                    <Text style={styles.text2}>Lat: {location.latitude}, Long: {location.longitude}</Text>
                    <MapPreview location={location} />
                    <Text style={styles.text2}>{address}</Text>
                    <Pressable onPress={onConfirmAddress} style={styles.button}>
                        <Text style={styles.textButton}>Confirmar</Text>
                    </Pressable>
                </View>
            ) : (
                <View>
                    <Text style={styles.textError}>{error}</Text>
                </View>
            )}
        </View>
    )
};

export default LocationSelector;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    text1: {
        fontFamily: 'NunitoBold',
        fontSize: 18,
        alignSelf: 'center',
    },
    text2: {
        fontFamily: 'NunitoRegular',
        fontSize: 18,
        alignSelf: 'center',
    },
    textError: {
        fontFamily: 'NunitoItalic2',
        fontSize: 14,
        color: colors.red,
        alignSelf: 'center',
        marginTop: 15,
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
});