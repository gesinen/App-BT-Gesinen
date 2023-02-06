import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { screen } from "../utils";
import { BlogStack } from "./stacks/BlogStack";
import UserScreen from "../screens/User/UserScreen";
import { Icon } from "@rneui/themed";
import { HomeStack, InvestStack, UserStack ,ShopStack} from './stacks';


const Tab = createBottomTabNavigator()

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#fa6f80",
                tabBarInactiveTintColor: "#878787",
                headerShown: false,
                tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
            })}
        >
            <Tab.Screen
                name={screen.home.tab}
                component={HomeStack}
                options={{ title: screen.home.title, headerShown: false }}
            />
            <Tab.Screen
                name={screen.shop.tab}
                component={ShopStack}
                options={{ title: screen.shop.title, headerShown: false }}
            />
            <Tab.Screen
                name={screen.user.tab}
                component={UserStack}
                options={{ title: screen.user.title, headerShown: false }}
            />
            <Tab.Screen
                name={screen.blog.tab}
                component={BlogStack}
                options={{ title: screen.blog.title, headerShown: false }}
            />
            <Tab.Screen
                name={screen.invest.tab}
                component={InvestStack}
                options={{ title: screen.invest.title, headerShown: false }}
            />
            
        </Tab.Navigator>
    )
}

function screenOptions(route, color, size) {
    let iconName;

    if (route.name === screen.home.tab) {
        iconName = "home-outline";
        return (
            <Icon type="material-community" name={iconName} color={color} size={size} containerStyle={{
                backgroundColor: "#fff",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 6,
            }}
                iconStyle={{
                    color: "#000",
                    fontSize:14,
                }} />
        );
    }

    if (route.name === screen.shop.tab) {
        iconName = "account-outline";
    }
    if (route.name === screen.user.tab) {
        iconName = "account-outline";
    }

    if (route.name === screen.blog.tab) {
        iconName = "newspaper-variant-multiple-outline";
    }

    if (route.name === screen.invest.tab) {
        iconName = "chart-bell-curve-cumulative";
    }

    return (
        <Icon type="material-community" name={iconName} color={color} size={size} />
    );
}