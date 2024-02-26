import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrderStack from "./OrderStack";
import { colors } from "../global/colors";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign, Feather, Octicons } from "@expo/vector-icons";

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar
                }}
            >
                <Tab.Screen
                    name="ShopTab"
                    component={ShopStack}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={styles.barIcons}>
                                    <AntDesign
                                        name="home"
                                        size={24}
                                        color={focused ? "white" : "grey"} />
                                    <Text style={{ color: focused ? "white" : "grey" }}>Inicio</Text>
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="CartTab"
                    component={CartStack}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={styles.barIcons}>
                                    <Feather
                                        name="shopping-cart"
                                        size={24}
                                        color={focused ? "white" : "grey"} />
                                    <Text style={{ color: focused ? "white" : "grey" }}>Carrito</Text>
                                </View>
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="OrderTab"
                    component={OrderStack}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={styles.barIcons}>
                                    <Octicons
                                        name="checklist"
                                        size={24}
                                        color={focused ? "white" : "grey"} />
                                    <Text style={{ color: focused ? "white" : "grey" }}>Historial</Text>
                                </View>
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.purple,
        height: 70,
    },
    barIcons: {
        justifyContent: "center",
        alignItems: "center",
    },
});