import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ScreenNames from "./routes";
import { Login } from "../screens/auth";

const Stack = createNativeStackNavigator();
export default function Routes() {
    return (
       <NavigationContainer>
        <Stack.Navigator 
         initialRouteName={ScreenNames.LOGIN}  screenOptions={{ header: () => false }}>
            <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
        </Stack.Navigator>
       </NavigationContainer>
    );
};

