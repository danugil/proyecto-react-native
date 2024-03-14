import { useEffect } from "react";
import { useGetProfileImageQuery, useGetUserLocationQuery } from "../services/shopService";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImage, setUserLocation } from "../features/auth/authSlice";

const MainNavigator = () => {
    const { user, localId } = useSelector(state => state.authReducer.value);
    const { data, error, isLoading } = useGetProfileImageQuery(localId);
    const { data: location } = useGetUserLocationQuery(localId);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (data) {
            console.log(data.image);
            dispatch(setProfileImage(data.image))
        }
        if (location) {
            dispatch(setUserLocation(location))
        }
    }, [data, location])

    return (
        <NavigationContainer>
            {user ? <TabNavigator /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default MainNavigator;